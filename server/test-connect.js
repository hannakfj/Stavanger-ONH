require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  await client.connect();

  const db = client.db("stavangeronh");
  const pages = db.collection("pages");

  // CREATE
  const insertRes = await pages.insertOne({
    slug: "test",
    title: "Testside",
    published: true,
    createdAt: new Date(),
  });
  const id = insertRes.insertedId;
  console.log("CREATE id:", id.toString());

  // READ
  const found = await pages.findOne({ _id: id });
  console.log("READ:", found);

  // UPDATE
  await pages.updateOne({ _id: id }, { $set: { title: "Oppdatert tittel" } });
  const updated = await pages.findOne({ _id: id });
  console.log("UPDATE:", updated);

  // DELETE
  await pages.deleteOne({ _id: id });
  const afterDelete = await pages.findOne({ _id: id });
  console.log("DELETE -> should be null:", afterDelete);

  await client.close();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { useTranslation } from "../features/language/useTranslation";

function HearingAid() {
  const { t } = useTranslation();

  const supplierList = t<{ name: string; phone: string }[]>(
    "hearingaid.supplierList"
  );
  return (
    <Box
      sx={{
        marginBottom: 4,
        maxWidth: "500px",
        mx: "auto",
        color: "text.secondary",
      }}
    >
      <Typography
        variant="h4"
        color="text.secondary"
        sx={{ p: 2, maxWidth: "500px", mx: "auto" }}
      >
        {t("hearingaid.title")}
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ p: 2, maxWidth: "500px", mx: "auto" }}
      >
        {t("hearingaid.first")}
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ p: 2, maxWidth: "500px", mx: "auto" }}
      >
        {t("hearingaid.second")}
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ p: 2, maxWidth: "500px", mx: "auto" }}
      >
        {t("hearingaid.third")}
      </Typography>
      <Box alignItems={"center"} sx={{ mt: 2, mb: 4 }}>
        <Typography
          gutterBottom
          sx={{
            fontSize: "1.2rem",
            textAlign: "center",
            marginBottom: 2,
            maxWidth: "800px",
            mx: "auto",
            color: "text.secondary",
          }}
        >
          {t("hearingaid.supplier")}
        </Typography>

        {supplierList.map((supplier, index) => (
          <Box
            textAlign={"center"}
            key={index}
            sx={{
              color: "text.secondary",
            }}
          >
            <Typography variant="body1" color="text.secondary">
              {supplier.name} -{" "}
              <a href={`tel:${supplier.phone}`} style={{ color: "inherit" }}>
                {supplier.phone}
              </a>
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default HearingAid;

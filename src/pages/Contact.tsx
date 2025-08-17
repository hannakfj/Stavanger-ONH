import { Box, Card, CardContent, Typography } from "@mui/material";
import { useTranslation } from "../features/language/useTranslation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Contact() {
  const { t } = useTranslation();
  const info = "Kan avvikle i fellesferie og høytider";
  return (
    <Box
      id="contact-section"
      sx={{
        scrollMarginTop: "80px",
        padding: "20px",
        textAlign: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Typography variant="h4" gutterBottom>
        {t("contactUs")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          mb: 4,
        }}
      >
        <Box margin={3}>
          <AccessTimeIcon fontSize="large" color="inherit" />
          <Typography variant="h6" gutterBottom>
            {t("openingHours")}
          </Typography>
          <Typography>08:00 - 15:00</Typography>
          <Typography>{info}</Typography>
        </Box>
        <Box margin={3}>
          <PhoneIcon fontSize="large" color="inherit" />
          <Typography variant="h6" gutterBottom>
            {t("phoneHours")}
          </Typography>
          <Typography>08:00 - 11:00</Typography>
          <Typography>
            <a href="tel:+4751883500" style={{ color: "inherit" }}>
              +47 51 88 35 00
            </a>
          </Typography>
          <Typography>{info}</Typography>
        </Box>
        <Box margin={3}>
          <MailOutlineIcon fontSize="large" color="inherit" />
          <Typography variant="h6" gutterBottom>
            {t("email")}
          </Typography>
          <Typography>
            <a href="mailto:post@stavangeronh.no" style={{ color: "inherit" }}>
              post@stavangeronh.no
            </a>
          </Typography>
        </Box>
      </Box>

      <Box
        component="iframe"
        title="Stavanger ØNH kart"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=no&amp;q=Boganesveien%2010+(Stavanger%20øre%20nese%20hals)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        sx={{
          border: 0,
          height: { xs: "300px", sm: "300px", md: "400px" },
          width: {
            xs: "90%",
            sm: "60%",
            md: "40%",
          },
        }}
      />
      <Box
        component="img"
        title="Stavanger ØNH kart"
        src={t("entrancePhoto") as string}
        sx={{
          border: 0,
          height: { xs: "300px", md: "400px" },
          width: {
            xs: "90%",
            sm: "60%",
            md: "40%",
          },
        }}
      />
    </Box>
  );
}

export default Contact;

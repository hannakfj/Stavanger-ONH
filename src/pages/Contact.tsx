import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "../features/language/useTranslation";

function Contact() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{ padding: "20px", textAlign: "center", backgroundColor: "#f0f0f0" }}
    >
      <Typography variant="h4" gutterBottom>
        {t("contactUs")}
      </Typography>
      <Typography>
        {t("email")}:{" "}
        <a href="mailto:post@stavangeronh.no" style={{ color: "inherit" }}>
          post@stavangeronh.no
        </a>
      </Typography>
      <Typography>
        {t("phone")}:{" "}
        <a href="tel:+4751883500" style={{ color: "inherit" }}>
          +47 51 88 35 00
        </a>
      </Typography>
      <Typography>{t("address")}: Boganesveien 10, 4020 Stavanger</Typography>
      <Typography>{t("openingHours")}: 08:00 - 16:00</Typography>
      <Box
        component="iframe"
        title="Stavanger ØNH kart"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=no&amp;q=Boganesveien%2010+(Stavanger%20øre%20nese%20hals)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        sx={{
          border: 0,
          height: { xs: "300px", sm: "400px", md: "500px" },
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

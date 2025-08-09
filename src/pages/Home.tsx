import { Box, Typography } from "@mui/material";
import { useTranslation } from "../features/language/useTranslation";
import Hero from "../components/Hero";
import Contact from "./Contact";

function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      <Box
        sx={{
          px: 2,
          py: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "900px",
            gap: 4,
          }}
        >
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ px: 2, py: 4, maxWidth: "500px", mx: "auto" }}
          >
            {t("secondPar")}
          </Typography>
          <Box
            component="img"
            src="/helsevestlogo.webp"
            alt="Helse Vest Logo"
            sx={{
              width: { xs: "50%", sm: "30%" },
              maxWidth: "200px",
              height: "auto",
            }}
          />
        </Box>
      </Box>

      <div id="contact-section">
        <Contact />
      </div>
    </>
  );
}

export default HomePage;

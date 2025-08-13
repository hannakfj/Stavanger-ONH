import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "../features/language/useTranslation";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";
import InfoSection from "../components/InfoSection";

function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
          <Box py={2}>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ p: 2, maxWidth: "500px", mx: "auto" }}
            >
              {t("infoFrontpage.first")}
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ p: 2, maxWidth: "500px", mx: "auto" }}
            >
              {t("infoFrontpage.third")}
              <Button
                onClick={() => {
                  navigate("/about");
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 50);
                }}
              >
                {t("moreInfoButton")}
              </Button>
            </Typography>
          </Box>
          <Box
            component="img"
            src="/helsevestlogo.webp"
            alt="Helse Vest Logo"
            sx={{
              width: { xs: "50%", sm: "40%" },
              maxWidth: "300px",
              height: "auto",
            }}
          />
        </Box>
      </Box>
      <InfoSection />
    </>
  );
}

export default HomePage;

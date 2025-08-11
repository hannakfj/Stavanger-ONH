import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { useTranslation } from "../features/language/useTranslation";

function AboutPage() {
  const { t } = useTranslation();
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
        {t("aboutUs")}
      </Typography>
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
        {t("infoFrontpage.second")}
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ p: 2, maxWidth: "500px", mx: "auto" }}
      >
        {t("infoFrontpage.third")}
      </Typography>
    </Box>
  );
}

export default AboutPage;

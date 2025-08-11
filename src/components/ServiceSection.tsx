import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTranslation } from "../features/language/useTranslation";

const ServicesSection = () => {
  const { t } = useTranslation();
  const services = t<string[]>("services");

  return (
    <Box sx={{ py: 6, px: 3, textAlign: "center" }}>
      <Typography
        variant="h4"
        color="text.secondary"
        sx={{ p: 2, maxWidth: "500px", mx: "auto" }}
      >
        {t("servicesTitle")}
      </Typography>
      <Box
        component="ul"
        sx={{
          maxWidth: "900px",
          marginX: "auto",
          textAlign: "left",
          columns: {
            xs: 1,
            sm: 2,
          },
          columnGap: 5,
        }}
      >
        {services.map((service, index) => (
          <Box
            component="li"
            key={index}
            sx={{
              mb: 1,
              fontSize: "1.4rem",
              color: "text.secondary",
              lineHeight: { xs: 2, sm: 3 },
              breakInside: "avoid",
            }}
          >
            {service}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesSection;

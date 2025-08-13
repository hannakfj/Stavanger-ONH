import Box from "@mui/material/Box";
import { useTranslation } from "../features/language/useTranslation";
import Typography from "@mui/material/Typography";

const Appointment = () => {
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
        {t("appointment")}
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ p: 2, maxWidth: "500px", mx: "auto" }}
      >
        {t("appointment.descriptionfirst")}
      </Typography>
    </Box>
  );
};

export default Appointment;

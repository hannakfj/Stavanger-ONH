import Box from "@mui/material/Box";
import { useTranslation } from "../features/language/useTranslation";
import Typography from "@mui/material/Typography";
import { a } from "framer-motion/dist/types.d-CtuPurYT";
import { title } from "process";

const Appointment = () => {
  const { t } = useTranslation();
  const appointmentInfo = t<{ title: string; description: string }[]>(
    "appointment.infoList"
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
        color="text.primary"
        sx={{ p: 2, maxWidth: "500px", mx: "auto" }}
      >
        {t("appointment")}
      </Typography>
      <Typography variant="h6" sx={{ p: 2, maxWidth: "500px", mx: "auto" }}>
        {t("appointment.descriptionfirst")}
      </Typography>
      {appointmentInfo.map((info, index) => (
        <>
          <Typography
            variant="h5"
            color="text.primary"
            sx={{ p: 2, paddingBottom: 0, maxWidth: "500px", mx: "auto" }}
          >
            {info.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{ p: 2, paddingTop: 0, maxWidth: "500px" }}
            key={index}
          >
            {info.description}
          </Typography>
        </>
      ))}
    </Box>
  );
};

export default Appointment;

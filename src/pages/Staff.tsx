import { Box, Typography } from "@mui/material";
import { useTranslation } from "../features/language/useTranslation";
import EmployeeList from "../components/EmployeeList";

function Staff() {
  const { t } = useTranslation();

  return (
    <Box >
      <Typography
        variant="h4"
        color="text.primary"
        sx={{
          textAlign: "center",
          maxWidth: "800px",
          mx: "auto",
          p: 2,
        }}
      >
        {t("staffButton")}
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          px: 2,

          textAlign: "center",
          maxWidth: "800px",
          mx: "auto",
        }}
      >
        {t("staffDescription")}
      </Typography>

      <EmployeeList />
    </Box>
  );
}

export default Staff;

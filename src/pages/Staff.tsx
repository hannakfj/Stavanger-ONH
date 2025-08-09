import { Box, Typography } from "@mui/material";
import { useTranslation } from "../features/language/useTranslation";
import EmployeeList from "../components/EmployeeList";

function Staff() {
  const { t } = useTranslation();

  return (
    <Box sx={{ px: 2, py: 4 }}>
      <Typography
        component="h1"
        variant="h5"
        gutterBottom
        sx={{
          textAlign: "center",
          marginBottom: 4,
          maxWidth: "800px",
          mx: "auto",
          lineHeight: 1.6,
          color: "text.secondary",
        }}
      >
        {t("staffDescription")}
      </Typography>

      <EmployeeList />
    </Box>
  );
}

export default Staff;

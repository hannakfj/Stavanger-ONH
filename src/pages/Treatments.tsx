import React from "react";
import TreatmentList from "../components/TreatmentList";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useTranslation } from "../features/language/useTranslation";

function Treatments() {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          px: 2,
          py: 4,
          textAlign: "center",
          maxWidth: "800px",
          mx: "auto",
        }}
      >
        {t("infoTreatmentsDescription")}
      </Typography>
      <TreatmentList />
    </Box>
  );
}

export default Treatments;

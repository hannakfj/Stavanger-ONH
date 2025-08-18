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
        variant="h4"
        color="text.primary"
        sx={{
          textAlign: "center",
          maxWidth: "800px",
          mx: "auto",
          p: 2,
        }}
      >
        {t("treatmentsButton")}
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
        {t("infoTreatmentsDescription")}
      </Typography>
      <TreatmentList />
    </Box>
  );
}

export default Treatments;

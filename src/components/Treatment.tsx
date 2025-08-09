// pages/Treatment.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "../features/language/useTranslation";

export default function TreatmentDetail() {
  const { name } = useParams(); // eks: "Allergy Immunotherapy"
  const decodedName = decodeURIComponent(name || "");
  const { t } = useTranslation();

  const treatments =
    t<{ title: string; image: string; longDescription: string }[]>(
      "treatments"
    );

  const treatment = treatments.find((t) => t.title === decodedName);

  if (!treatment) {
    return (
      <Typography variant="h6" sx={{ p: 4 }}>
        Treatment not found
      </Typography>
    );
  }

  return (
    <Box sx={{ p: 4, maxWidth: "800px", margin: "auto" }}>
      <Typography variant="h4" gutterBottom>
        {treatment.title}
      </Typography>
      <Box
        component="img"
        src={treatment.image}
        alt={treatment.title}
        sx={{ width: { xs: "90%" }, height: "auto", borderRadius: 2 }}
      />
      <Typography variant="body1">{treatment.longDescription}</Typography>
    </Box>
  );
}

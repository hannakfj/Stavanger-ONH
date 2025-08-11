import Container from "@mui/material/Container";
import { useTranslation } from "../features/language/useTranslation";
import TreatmentCard from "./TreatmentCard";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function TreatmentList() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const treatments = t<{ slug: string; title: string; image: string }[]>("treatments");
  const handleNavigate = (treatmentName: string) => {
    const urlSafeName = encodeURIComponent(treatmentName);
    navigate(`/treatment/${urlSafeName}`);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: 4,
        }}
      >
        {treatments.map((treatment, index) => (
          <TreatmentCard
            key={index}
            treatmentName={treatment.title}
            image={treatment.image}
            onClick={() => handleNavigate(treatment.slug)}
          />
        ))}
      </Box>
    </Container>
  );
}

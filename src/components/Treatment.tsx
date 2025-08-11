import { useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "../features/language/useTranslation";

export default function TreatmentDetail() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const treatments = t<
    {
      slug: string;
      title: string;
      image: string;
      firstHeading?: string;
      firstSection?: string;
      list?: string[];
      listInfo?: string[];
      linkSleep?: string;
    }[]
  >("treatments");

  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) {
    return (
      <Typography variant="h6" sx={{ p: 4 }}>
        Treatment not found
      </Typography>
    );
  }

  return (
    <Box sx={{ p: 4, maxWidth: "700px", margin: "auto" }}>
      <Typography variant="h4" gutterBottom>
        {treatment.title}
      </Typography>

      <Box
        component="img"
        src={treatment.image}
        alt={treatment.title}
        sx={{ width: { xs: "90%" }, height: "auto", borderRadius: 2, mb: 4 }}
      />
      {treatment.list &&
        treatment.list.map((service, index) => (
          <Box
            component="li"
            key={index}
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.4rem",
              },
              color: "text.secondary",
              lineHeight: 1.5,
            }}
          >
            {service}
          </Box>
        ))}
      {[1, 2, 3, 4, 5].map((num) => (
        <Box key={num} sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            {treatment[`heading${num}` as keyof typeof treatment] ||
              treatment[`firstHeading`]}
          </Typography>
          {num === 5 && treatment.listInfo && (
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              {treatment.listInfo.map((info, index) => (
                <Typography
                  component="li"
                  sx={{
                    fontSize: "inherit",
                    lineHeight: 1.6,
                    color: "text.secondary",
                  }}
                >
                  {info}
                </Typography>
              ))}
            </Box>
          )}
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.8, color: "text.secondary" }}
          >
            {treatment[`section${num}` as keyof typeof treatment] ||
              treatment[`firstSection`]}
          </Typography>
        </Box>
      ))}
      {treatment.linkSleep && (
        <Button
          href={treatment.linkSleep}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "primary.main", textDecoration: "underline" }}
        >
          {t("linkInfo")}
        </Button>
      )}
    </Box>
  );
}

import { Container, Typography, Box, Paper } from "@mui/material";
import { useTranslation } from "../features/language/useTranslation";

export default function Letter() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        {t("letter.title")}
      </Typography>

      <Paper
        elevation={0}
        sx={{
          borderLeft: "4px solid #18AEAC",
          pl: 2,
          mb: 3,
        }}
      >
        <Typography variant="h6" fontWeight="bold" color="#18AEAC">
          {t("letter.subtitle")}
        </Typography>
        <Typography fontWeight="bold">{t("letter.clinicName")}</Typography>
        <Typography sx={{ whiteSpace: "pre-line" }}>
          {t("letter.address")}
        </Typography>
        <Typography>{t("letter.phone")}</Typography>
        <Box
          component="a"
          href={String(t("letter.website"))}
          target="_blank"
          rel="noopener"
        >
          {t("letter.website")}
        </Box>
      </Paper>

      <Typography paragraph>{t("letter.intro")}</Typography>
      <Typography paragraph>{t("letter.location")}</Typography>
      <Typography paragraph>{t("letter.parking")}</Typography>
      <Typography paragraph>{t("letter.allergy")}</Typography>
      <Typography paragraph>{t("letter.payment")}</Typography>
      <Typography paragraph>{t("letter.cancel")}</Typography>

      <Typography paragraph fontWeight="bold">
        {t("letter.infection")}
      </Typography>

      <Typography paragraph fontWeight="bold">
        {t("letter.closing")}
      </Typography>
      <Typography paragraph>{t("letter.regards")}</Typography>
      <Typography paragraph fontWeight="bold">
        {t("letter.signature")}
      </Typography>
      <Typography paragraph>{t("letter.clinic")}</Typography>
    </Container>
  );
}

import { Box, Grid } from "@mui/material";
import { useTranslation } from "../features/language/useTranslation";

const InfoSection = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: "#dde9f5ff",
        py: 6,
        px: 3,
      }}
    >
      <Grid container spacing={2} justifyContent="center"></Grid>
    </Box>
  );
};

export default InfoSection;

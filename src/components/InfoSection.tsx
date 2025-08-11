import { Box, Grid } from "@mui/material";
import { useTranslation } from "../features/language/useTranslation";
import InfoBox from "./InfoBox";

const InfoSection = () => {
  const { t } = useTranslation();
  const infoBoxList = t<
    {
      title: string;
      description: string;
    }[]
  >("infoBoxList");

  return (
    <Box
      sx={{
        backgroundColor: "#dde9f5ff",
        py: 6,
        px: 3,
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {infoBoxList.map((box, index) => (
          <InfoBox
            key={index}
            title={box.title}
            description={box.description}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default InfoSection;

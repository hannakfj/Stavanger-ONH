import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

type InfoBoxProps = {
  title: string;
  description: string;
};

const InfoBox: React.FC<InfoBoxProps> = ({ title, description }) => {
  return (
    <Card sx={{ maxWidth: 350}}>
      <CardContent>
        <Typography variant="h5" color="text.secondary" sx={{ py: 2 }}>
          {title}
        </Typography>
        <Typography
          sx={{ fontSize: "1.2rem", marginBottom: 4, color: "text.secondary" }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default InfoBox;

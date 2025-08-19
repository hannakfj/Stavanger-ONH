import { Card, CardMedia, Typography, Box } from "@mui/material";
import React from "react";

type EmployeeCardProps = {
  name: string;
  position: string;
  experience: string;
  image: string;
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  name,
  position,
  experience,
  image,
}) => {
  return (
    <Box sx={{ maxWidth: 300, margin: "auto", mt: 2 }}>
      <Card>
        <CardMedia
          component="img"
          loading="lazy"
          height="300"
          image={image}
          alt={name}
        />
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6" sx={{ fontFamily: "sans-serif" }}>
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "sans-serif",
              color: "text.secondary",
              margin: 1,
            }}
          >
            {position}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "sans-serif",
              color: "text.secondary",
              margin: 1,
            }}
          >
            {experience}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default EmployeeCard;

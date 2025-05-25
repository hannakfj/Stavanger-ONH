import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

type TreatmentCardProps = {
  treatmentName: string;
  image: string;
  onClick?: () => void;
};

const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatmentName, image, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        maxWidth: 345,
        borderRadius: 2,
        boxShadow: 3,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: onClick ? 'scale(1.02)' : 'none',
        },
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={treatmentName}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {treatmentName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TreatmentCard;

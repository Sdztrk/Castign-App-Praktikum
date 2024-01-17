import React from 'react'
import { Box, Card, CardContent, Grid, Paper, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import HeightIcon from '@mui/icons-material/Height' 
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import PaletteIcon from '@mui/icons-material/Palette' 
import AccessibilityIcon from '@mui/icons-material/Accessibility' 

const PhysicalFeaturesContent = ({ artistProfile }) => {
  const infoItems = [
    { title: "Göz Rengi", value: artistProfile?.eye_color, icon: <VisibilityIcon /> },
    { title: "Boy", value: artistProfile?.length, icon: <HeightIcon /> },
    { title: "Kilo", value: artistProfile?.weight, icon: <FitnessCenterIcon /> },
    { title: "Ten Rengi", value: artistProfile?.skin_color, icon: <PaletteIcon /> },
    { title: "Vücut Ölçüleri", value: artistProfile?.body_size, icon: <AccessibilityIcon /> },
  ];

  return (
    <Paper elevation={3} sx={{ padding: '16px', marginTop: '8px' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {infoItems.map((info, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card variant="outlined" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CardContent sx={{ flex: '1 1 auto' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                  {info.icon}
                  <Box ml={1}>{info.title}</Box>
                </Typography>
                <Typography variant="body2">{info.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default PhysicalFeaturesContent

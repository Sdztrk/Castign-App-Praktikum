import React from 'react';
import { Box, Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School'; 
import WorkIcon from '@mui/icons-material/Work'; 
import WcIcon from '@mui/icons-material/Wc'; 
import CakeIcon from '@mui/icons-material/Cake';
import LanguageIcon from '@mui/icons-material/Language'; 
import AccountTreeIcon from '@mui/icons-material/AccountTree'; 
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'; 
import DriveEtaIcon from '@mui/icons-material/DriveEta'; 
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import StarBorderIcon from '@mui/icons-material/StarBorder'; 
import LocationOnIcon from '@mui/icons-material/LocationOn'

const GeneralInfoContent = ({ artistProfile }) => {
  const infoItems = [
    { title: "Ülke", value: artistProfile?.citizen, icon: <LocationOnIcon /> },
    { title: "Üniversite", value: artistProfile?.university, icon: <SchoolIcon /> },
    { title: "Ajans", value: artistProfile?.agency, icon: <WorkIcon /> },
    { title: "Cinsiyet", value: artistProfile?.gender, icon: <WcIcon /> },
    { title: "Doğum Tarihi", value: artistProfile?.birthdate, icon: <CakeIcon /> },
    { title: "Bildiği Diller", value: artistProfile?.languages, icon: <LanguageIcon /> },
    { title: "Branşı", value: artistProfile?.branch, icon: <AccountTreeIcon /> },
    { title: "Departmanı", value: artistProfile?.department, icon: <BusinessCenterIcon /> },
    { title: "Ehliyet Durumu", value: artistProfile?.driving_licence, icon: <DriveEtaIcon /> },
    { title: "Menejer", value: artistProfile?.manager, icon: <PersonSearchIcon /> },
    { title: "Referans", value: artistProfile?.references, icon: <StarBorderIcon /> },
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

export default GeneralInfoContent;

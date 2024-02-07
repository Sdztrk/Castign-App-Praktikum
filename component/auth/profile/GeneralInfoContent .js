import React from "react";
import { Box, Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import {
  School,
  Work,
  Wc,
  Cake,
  Language,
  AccountTree,
  BusinessCenter,
  DriveEta,
  PersonSearch,
  StarBorder,
  LocationOn,
} from "@mui/icons-material";

const GeneralInfoContent = ({ artistProfile }) => {
  const infoItems = [
    { title: "Ülke", value: artistProfile?.citizen, icon: <LocationOn /> },
    { title: "Üniversite", value: artistProfile?.university, icon: <School /> },
    { title: "Ajans", value: artistProfile?.agency, icon: <Work /> },
    { title: "Cinsiyet", value: artistProfile?.gender, icon: <Wc /> },
    { title: "Doğum Tarihi", value: artistProfile?.birthdate, icon: <Cake /> },
    {
      title: "Bildiği Diller",
      value: artistProfile?.languages,
      icon: <Language />,
    },
    { title: "Branşı", value: artistProfile?.branch, icon: <AccountTree /> },
    {
      title: "Departmanı",
      value: artistProfile?.department,
      icon: <BusinessCenter />,
    },
    {
      title: "Ehliyet Durumu",
      value: artistProfile?.driving_licence,
      icon: <DriveEta />,
    },
    { title: "Menejer", value: artistProfile?.manager, icon: <PersonSearch /> },
    {
      title: "Referans",
      value: artistProfile?.references,
      icon: <StarBorder />,
    },
  ];

  return (
    <Paper elevation={3} sx={{ padding: "16px", marginTop: "8px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {infoItems.map((info, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              variant="outlined"
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
            >
              <CardContent sx={{ flex: "1 1 auto" }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
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

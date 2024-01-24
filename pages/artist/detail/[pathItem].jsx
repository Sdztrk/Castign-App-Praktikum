import {
  Person,
  Face2,
  Work,
  SlowMotionVideo,
  PhotoCamera,
  ConnectWithoutContact,
  OndemandVideo,
  CameraAlt,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import API from "@/helpers/ApiBuilder";
import AppContext from "@/AppContext";
import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  CircularProgress,
  Alert,
  CardHeader,
  CardMedia,
} from "@mui/material";
import { BackendMediaPath } from "@/constants/BackendValues";
import Divider from "@mui/material/Divider";

const ArtistProfilePage = ({}) => {
  const { router, query } = useRouter();
  const { userInfo } = useContext(AppContext);
  const userId = query.pathItem;

  // Use state to manage the artist profile
  const [artistProfile, setArtistProfile] = useState(null);

  useEffect(() => {
    // Define an async function to fetch data
    async function fetchArtistProfile() {
      if (userInfo.user === null) {
        return;
      }
      if (!userInfo.loggedIn) {
        router.push("/login");
        return;
      }
      const accessToken = Cookies.get("accessToken");
      if (accessToken && userId) {
        console.log(userId);
        const profile = await API.get(
          `get_artist_profile/${userId}/`,
          accessToken
        );
        setArtistProfile(profile);
      }
    }
    fetchArtistProfile();
    return () => {
      // Any cleanup logic goes here
    };
  }, [userInfo, router, userId]);

  if (!userInfo) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  } else if (artistProfile?.error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Alert severity="warning">
          <Typography variant="h6">{artistProfile?.error}</Typography>
        </Alert>
      </Box>
    );
  }
  return (
    <Box p={15}>
      {artistProfile && (
        <Grid
          container
          sx={{
            bgcolor: "background.paper",
            borderRadius: 2,
          }}
        >
          {/* Fotoğraf Kartı */}
          <Grid item xs={12} sm={6} md={4}>
            <Card raised sx={{ height: 375, margin: 2 }}>
              <Typography variant="h6">
                <CameraAlt sx={{ fontSize: 30 }} />
                Fotoğraf
              </Typography>
              <Divider sx={{ bgcolor: "black", my: 1 }} />
              <CardMedia
                component="img"
                image={
                  BackendMediaPath + artistProfile.photo ||
                  "path/to/default/image.jpg"
                }
                sx={{
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </Card>
          </Grid>

          {/* Video Kartı */}
          <Grid item xs={12} sm={6} md={4}>
            <Card raised sx={{ maxWidth: 375, margin: 2 }}>
              <Typography variant="h6">
                <OndemandVideo sx={{ fontSize: 30 }} />
                Video
              </Typography>
              <Divider sx={{ bgcolor: "black", my: 1 }} />
              <CardMedia>
                <video
                  controls
                  style={{
                    width: "170%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                >
                  <source
                    src={BackendMediaPath + artistProfile.video}
                    type="video/mp4"
                  />
                  Sorry, your browser doesn't support embedded videos.
                </video>
              </CardMedia>
            </Card>
          </Grid>

          {/* Middle Top Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Card raised sx={{ height: 375, margin: 2 }}>
              <CardContent>
                <Typography variant="h5">
                  {" "}
                  <Person sx={{ fontSize: 33 }} /> Kisisel bilgiler
                </Typography>
                <Divider sx={{ bgcolor: "black", my: 1 }} />
                <Typography variant="body1" m={2}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Isim:
                  </Typography>{" "}
                  {artistProfile?.first_name}
                </Typography>
                <Typography variant="body1" m={2}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Soyisim:
                  </Typography>{" "}
                  {artistProfile?.last_name}
                </Typography>
                <Typography variant="body1" m={2}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Telefon numarasi:
                  </Typography>{" "}
                  {artistProfile?.phone}
                </Typography>
                <Typography variant="body1" m={2}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Ulke:
                  </Typography>{" "}
                  {artistProfile?.country}
                </Typography>
                <Typography variant="body1" m={2}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Sehir:
                  </Typography>{" "}
                  {artistProfile?.city}
                </Typography>
                <Typography variant="body1" m={2}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Uyruk:
                  </Typography>{" "}
                  {artistProfile?.citizen}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Right Top Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Card raised sx={{ height: 375, margin: 2 }}>
              <CardContent>
                <Typography variant="h5">
                  <Face2 /> Vucut ozellikleri
                </Typography>
                <Divider sx={{ bgcolor: "black", my: 1 }} />
                <Typography variant="body1" m={2}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Cinsiyet:
                  </Typography>
                  {artistProfile?.gender == "M" ? "Bay" : "Bayan"}
                </Typography>
                <Typography variant="body1" m={2}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Vücut ölçüsü:
                  </Typography>{" "}
                  {artistProfile?.body_size}
                </Typography>
                <Typography variant="body1" m={2}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Boy ölçüsü:
                  </Typography>{" "}
                  {artistProfile?.length}
                </Typography>
                <Typography variant="body1" m={2}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Kilo:
                  </Typography>{" "}
                  {artistProfile?.weight}
                </Typography>
                <Typography variant="body1" m={2}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Goz rengi:
                  </Typography>{" "}
                  {artistProfile?.eye_color}
                </Typography>
                <Typography variant="body1" m={2}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Cilt rengi:
                  </Typography>{" "}
                  {artistProfile?.skin_color}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Bottom Column */}
          <Grid item xs={12} sm={6} md={4}>
            {/* Basic Information */}
            <Card raised sx={{ height: 375, margin: 2 }}>
              <CardContent>
                <Typography variant="h6">
                  <Work /> Profesyonel bilgi
                </Typography>
                <Divider sx={{ bgcolor: "black", my: 1 }} />
                <Typography variant="body1" m={2}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Ehliyet:
                  </Typography>{" "}
                  {artistProfile?.driving_licence}
                </Typography>
                <Typography variant="body1" m={2}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Ajans:
                  </Typography>{" "}
                  {artistProfile?.agency}
                </Typography>
                <Typography variant="body1" m={2}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Brans:
                  </Typography>{" "}
                  {artistProfile?.branch}
                </Typography>
                <Typography variant="body1" m={2}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Diller:
                  </Typography>{" "}
                  {artistProfile?.languages}
                </Typography>
                <Typography variant="body1" m={2}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Tecrube:
                  </Typography>{" "}
                  {artistProfile?.experience}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Middle Bottom Column */}
          <Grid item xs={12} sm={6} md={4}>
            {/* Other Information */}
            <Card raised sx={{ height: 375, margin: 2 }}>
              <CardContent>
                <Typography variant="h6">
                  <ConnectWithoutContact sx={{ fontSize: 30 }} /> Sosyal
                  platformlar
                </Typography>
                <Divider sx={{ bgcolor: "black", my: 1 }} />
                <Typography variant="body1" m={2}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Facebook:
                  </Typography>{" "}
                  {artistProfile?.facebook}
                </Typography>
                <Typography variant="body1" m={2}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Instagram:
                  </Typography>{" "}
                  {artistProfile?.instagram}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ArtistProfilePage;

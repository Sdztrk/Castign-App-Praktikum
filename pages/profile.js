import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography, Drawer, IconButton, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import API from '@/helpers/ApiBuilder';
import AppContext from '@/AppContext';
import Avatar from '@mui/material/Avatar';
import { BackendMediaPath } from '@/constants/BackendValues';
import Switch from '@mui/material/Switch';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SettingsIcon from '@mui/icons-material/Settings';
import GeneralInfoContent from '@/component/auth/profile/GeneralInfoContent ';
import PhysicalFeaturesContent from '@/component/auth/profile/PhysicalFeaturesContent ';
import ContactInformation from '@/component/auth/profile/ContactInformation ';
import SocialMediaAccounts from '@/component/auth/profile/SocialMediaAccounts ';
import EditProfileForm from '@/component/auth/profile/EditProfileForm';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import CloseIcon from '@mui/icons-material/Close';
import { BASE_URL } from '@/constants/BackendValues';

function Profile() {
  const router = useRouter();
  const { userInfo } = useContext(AppContext);
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [activeTab, setActiveTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editedProfileData, setEditedProfileData] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [artistProfile, setArtistProfile] = useState(null);
  useEffect(() => {
    async function fetchArtistProfile() {
      if (userInfo.user === null) {
        return;
      }
      if (!userInfo.loggedIn) {
        router.push('/login');
        return;
      }
      const accessToken = Cookies.get("accessToken");
      if (accessToken) {
        const profile = await API.get('get_artist_profile', accessToken);
        setArtistProfile(profile);
      }
    }
    fetchArtistProfile();
    return () => {
    };
  }, [userInfo, router]);

  if (!userInfo) {
    return <Box sx={{ marginTop: 10 }}>Loading...</Box>;
  }
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };
  const handleEditClick = () => {
    setDrawerOpen(true);

    setEditedProfileData(artistProfile || {});
  };
  const handleSave = async (updatedProfile) => {
    delete updatedProfile['is_active'];
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      await API.post('post_artist_profile', updatedProfile, accessToken);
      setArtistProfile(updatedProfile);
      setDrawerOpen(false);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const AboutContent = () => (
    <Box sx={{ margin: 'auto', maxWidth: '300px', textAlign: 'center' }}>
      <Typography variant="h5" sx={{ fontSize: '2rem', fontFamily: 'Varela Round', textAlign: 'center' }}>
        ABOUT
      </Typography>
      <Typography sx={{ marginBottom: '10px', fontSize: '1rem' }}>
        {artistProfile ? artistProfile.introduction : ""}
      </Typography>
    </Box>
  )
  const handleCameraClick = async () => {
    try {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';

      fileInput.onchange = async (e) => {
        const file = e.target.files[0];
        if (file) {
          const formData = new FormData();
          formData.append('avatar', file);
          const jwtToken = Cookies.get("accessToken");
          try {
            const response = await fetch(`${BASE_URL}post_artist_profile`, {
              method: 'POST',
              headers: jwtToken ? {
                'Authorization': `Bearer ${jwtToken}`,
              } : {},
              body: formData,
            });
            if (response.ok) {
              const data = await response.json();
              setArtistProfile(prevState => ({
                ...prevState,
                photo: data.photo,
              }));
            } else {
              console.error('Profil fotoğrafı güncellenirken hata oluştu:', response.status);
            }
          } catch (error) {
            console.error('Profil fotoğrafı güncelleme hatası:', error);
          }
          document.body.removeChild(fileInput);
        }
      };
      document.body.appendChild(fileInput);
      fileInput.click();
    } catch (error) {
      console.error('Dosya seçme hatası:', error);
    }
  };

  const handleVideoClick = async () => {
    try {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'video/*';

      fileInput.onchange = async (e) => {
        const file = e.target.files[0];
        if (file) {
          const formData = new FormData();
          formData.append('video', file);
          const jwtToken = Cookies.get("accessToken");
          try {
            const response = await fetch(`${BASE_URL}post_artist_profile`, {
              method: 'POST',
              headers: jwtToken ? {
                'Authorization': `Bearer ${jwtToken}`,
              } : {},
              body: formData,
            });
            if (response.ok) {
              const data = await response.json();
              setArtistProfile(prevState => ({
                ...prevState,
                video: data.video,
              }));
            } else {
              console.error('Profil fotoğrafı güncellenirken hata oluştu:', response.status);
            }
          } catch (error) {
            console.error('Profil fotoğrafı güncelleme hatası:', error);
          }
          document.body.removeChild(fileInput);
        }
      };
      document.body.appendChild(fileInput);
      fileInput.click();
    } catch (error) {
      console.error('Dosya seçme hatası:', error);
    }
  };

  return (
    <Box p={15} >
      {artistProfile && (
        <Box >
          <Typography variant="h6" sx={{ marginTop: 10, textAlign: 'center', fontSize: '3rem', fontFamily: 'Varela Round' }} gutterBottom>
            Your Profile
          </Typography>
          <Box sx={{ position: 'absolute', right: 40, top: 90, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Switch {...label} defaultChecked />
              </Box>
              <IconButton
                aria-label="ayarlar"
                onClick={() => { handleClose(); handleEditClick(); }}
                sx={{ width: 50 }}>
                <SettingsIcon />
              </IconButton>
            </Box>
          </Box>
          <Box />
          <Box sx={{ marginLeft: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ position: 'relative', display: 'inline-block' }}>
              <Avatar
                src={artistProfile ? BackendMediaPath + artistProfile.photo : ''}
                sx={{
                  width: 200,
                  height: 200,
                  border: '2px solid #fff',
                  borderRadius: '50%',
                  position: 'relative',
                }}
              />
              <IconButton
                color="primary"
                onClick={handleCameraClick}
                sx={{
                  position: 'absolute',
                  bottom: 90,
                  right: 30,
                  border: '2px solid #3f51b5',
                  backgroundColor: 'background.paper',
                  borderRadius: '50%',
                  zIndex: 1,
                  transform: 'translate(50%, 50%)',
                }}
              >
                <PhotoCameraIcon />
              </IconButton>
              <Box>
                <Typography variant="h6" gutterBottom>
                  {userInfo && userInfo.user ? userInfo.user.first_name : ''}   {userInfo && userInfo.user ? userInfo.user.last_name : ''}
                </Typography>
                <Typography> {userInfo && userInfo.user ? userInfo.user.email : ''} </Typography>
              </Box>
            </Box>
            <Box sx={{ width: '150%', display: 'flex', justifyContent: 'center' }}>
              <AboutContent />
            </Box>
            <Box sx={{ position: 'relative', width: '100%', height: 'auto', margin: 2 }}>
              <video controls key={artistProfile ? artistProfile.video : 'default-key'} style={{ width: '92%', height: '200px' }}>
                <source src={artistProfile ? BackendMediaPath + artistProfile.video : ''} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>
              <IconButton
                color="secondary"
                onClick={handleVideoClick}
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 20,
                  border: '2px solid #3f51b5',
                  backgroundColor: 'background.paper',
                  '&:hover': {
                    backgroundColor: 'background.paper',
                  },
                  borderRadius: '50%',
                }}
              >
                <VideoCameraFrontIcon />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ marginTop: 15, textAlign: 'center' }}>
            <Tabs value={activeTab} onChange={handleTabChange} centered>
              <Tab label="Physical Features" />
              <Tab label="General Information" />
              <Tab label="Contact information" />
              <Tab label="Social Media Accounts" />
            </Tabs>
            {activeTab === 0 && <PhysicalFeaturesContent artistProfile={artistProfile} />}
            {activeTab === 1 && <GeneralInfoContent artistProfile={artistProfile} />}
            {activeTab === 2 && <ContactInformation artistProfile={artistProfile} />}
            {activeTab === 3 && <SocialMediaAccounts artistProfile={artistProfile} />}
          </Box>
          <Drawer
            anchor='right'
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Box sx={{ width: 750 }} role="presentation">
              <IconButton
                onClick={() => setDrawerOpen(false)}
                sx={{ position: 'absolute', left: 8, top: 8 }}
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ textAlign: 'center', pt: 3 }} variant="h6" noWrap>
                Edit Profile
              </Typography>
              <EditProfileForm profile={editedProfileData} onSave={handleSave} />
            </Box>
          </Drawer>
        </Box>
      )}
    </Box>
  )
}
export default Profile
import React, { useContext, useEffect, useState } from 'react';
import { Box, List, ListItem, ListItemText, Typography, Drawer, Button,IconButton,Menu,MenuItem } from '@mui/material';
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
import AddressContent from '@/component/auth/profile/AddressContent';
import PhysicalFeaturesContent from '@/component/auth/profile/PhysicalFeaturesContent ';
import ContactInformation from '@/component/auth/profile/ContactInformation ';
import SocialMediaAccounts from '@/component/auth/profile/SocialMediaAccounts ';
import EditProfileForm from '@/component/auth/profile/EditProfileForm';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
function Profile() {
    const router = useRouter();
    const { userInfo } = useContext(AppContext);
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [activeTab, setActiveTab] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [editedProfileData, setEditedProfileData] = useState({});
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    // Use state to manage the artist profile
    const [artistProfile, setArtistProfile] = useState(null);
    console.log(userInfo ,' userİnfo buraya geliyormuu')
    console.log(artistProfile ,' Artist profile buraya geliyormuu')
    useEffect(() => {
        // Define an async function to fetch data
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
                console.log(profile);
            }
        }

        // Call the async function
        fetchArtistProfile();

        // Cleanup function if needed
        return () => {
            // Any cleanup logic goes here
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
    
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      await API.put('update_artist_profile', updatedProfile, accessToken);
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
          <Typography  sx={{ marginBottom: '10px',fontSize: '1rem' }}>
            {artistProfile ? artistProfile.introduction : ""}
          </Typography>
        </Box>
      )

      const handleCameraClick = async () => {
        try {
          const fileInput = document.createElement('input');
          fileInput.type = 'file';
          fileInput.accept = 'image/*';
      
          fileInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
      
            if (file) {
              const formData = new FormData();
              formData.append('avatar', file);
      
              const accessToken = Cookies.get("accessToken");
              const csrfToken = Cookies.get('csrftoken'); // CSRF token'ını cookie'den alın
      
              if (accessToken && csrfToken) {
                try {
                  const response = await API.post('post_artist_profile', formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                      'Authorization': `Bearer ${accessToken}`,
                      'X-CSRFToken': csrfToken, // CSRF token'ını header'lara ekleyin
                    },
                  });
      
                  if (response.data && response.data.success) {
                    setArtistProfile(prevState => ({
                      ...prevState,
                      photo: response.data.photo, // Backend'in döndürdüğü yeni fotoğraf yolunu kullanın
                    }));
                  }
                } catch (error) {
                  console.error('Profil güncelleme hatası:', error);
                  // Burada kullanıcıya bir hata mesajı gösterebilirsiniz.
                }
              }
      
              // File input'u DOM'dan kaldır
              document.body.removeChild(fileInput);
            }
          });
      
          // File input'u DOM'a ekle ve tıkla
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
        
          fileInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
        
            if (file) {
              const formData = new FormData();
              formData.append('video', file);
        
              const accessToken = Cookies.get("accessToken");
              const csrfToken = Cookies.get('csrftoken'); // CSRF token'ını cookie'den alın
        
              if (accessToken && csrfToken) {
                try {
                  const response = await API.post('post_artist_video', formData, { // Video yükleme endpoint'iniz ne ise
                    headers: {
                      'Content-Type': 'multipart/form-data',
                      'Authorization': `Bearer ${accessToken}`,
                      'X-CSRFToken': csrfToken,
                    },
                  });
        
                  if (response.data && response.data.success) {
                    setArtistProfile(prevState => ({
                      ...prevState,
                      video: response.data.video, // Backend'in döndürdüğü yeni video yolunu kullanın
                    }));
                  }
                } catch (error) {
                  console.error('Video yükleme hatası:', error);
                }
              }
        
              document.body.removeChild(fileInput);
            }
          });
        
          document.body.appendChild(fileInput);
          fileInput.click();
        } catch (error) {
          console.error('Dosya seçme hatası:', error);
        }
      };
   

    return (
        <Box sx={{ marginTop: 8 }}>
        <Typography variant="h6" sx={{ marginTop: 10, textAlign: 'center', fontSize: '3rem', fontFamily: 'Varela Round' }} gutterBottom>
            Your Profile
        </Typography>
        <Box sx={{ position: 'absolute', right: 40, top: 90, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="caption" sx={{fontSize: '1rem' }}>
          Ayarlar
        </Typography>
        <IconButton 
          aria-label="ayarlar" 
          onClick={handleClick}
          sx={{ width: 50 }}>
          <SettingsIcon />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            Profil görünürlüğü: <Switch {...label} defaultChecked />
          </Box>
        </MenuItem>
        <MenuItem onClick={() => { handleClose(); handleEditClick(); }}>
         Edit profil
        </MenuItem>
      </Menu>
      <Box/>
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
  <video controls style={{ width: '80%', height: 'auto' }}>
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
          <Tab label="Address" />
          <Tab label="Physical Features" />
          <Tab label="General Information" />
          <Tab label="Contact information" />
          <Tab label="Social Media Accounts" />
        </Tabs>
        {activeTab === 0 && <AddressContent artistProfile={artistProfile} />}
        {activeTab === 1 && <PhysicalFeaturesContent artistProfile={artistProfile}   />}
        {activeTab === 2 && <GeneralInfoContent artistProfile={artistProfile} />} 
        {activeTab === 3 && <ContactInformation artistProfile={artistProfile}/>}
        {activeTab === 4 && <SocialMediaAccounts artistProfile={artistProfile}/>}
      </Box>
      <Drawer
  anchor='right'
  open={drawerOpen}
  onClose={toggleDrawer(false)}
>
  <Box sx={{ width: 750 }} role="presentation">
    <Typography sx={{textAlign:'center' }} variant="h6" noWrap>
      Edit Profile
    </Typography>
    <EditProfileForm profile={editedProfileData} onSave={handleSave}  />
  </Box>
</Drawer>
    </Box>
        )
    }
    
    export default Profile
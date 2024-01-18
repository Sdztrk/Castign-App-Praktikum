import React, { useContext, useEffect, useState } from 'react';
import { Box, List, ListItem, ListItemText, Typography, Drawer, Button } from '@mui/material';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import API from '@/helpers/ApiBuilder';
import AppContext from '@/AppContext';
import Avatar from '@mui/material/Avatar';
import { BackendMediaPath } from '@/constants/BackendValues';
import Switch from '@mui/material/Switch';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GeneralInfoContent from '@/component/auth/profile/GeneralInfoContent ';
import AddressContent from '@/component/auth/profile/AddressContent';
import PhysicalFeaturesContent from '@/component/auth/profile/PhysicalFeaturesContent ';
import ContactInformation from '@/component/auth/profile/ContactInformation ';
import SocialMediaAccounts from '@/component/auth/profile/SocialMediaAccounts ';
import EditProfileForm from '@/component/auth/profile/EditProfileForm';
function Profile() {
    const router = useRouter();
    const { userInfo } = useContext(AppContext);
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [activeTab, setActiveTab] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [editedProfileData, setEditedProfileData] = useState({});

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
      setDrawerOpen(true); // Edit butonuna tıklandığında çekmeceyi aç
      // Profil verilerini düzenlenebilir veri olarak ayarla
      setEditedProfileData(artistProfile || {});
  };
  const handleSave = async (updatedProfile) => {
    // API çağrısı ile güncellemeyi burada yapın
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      await API.put('update_artist_profile', updatedProfile, accessToken);
      setArtistProfile(updatedProfile); // Profil durumunu güncelle
      setDrawerOpen(false); // Çekmeceyi kapat
    }
  };
  const handleCancel = () => {
    setFormData(profile); 
    setIsEditing(false); 
 }

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
   

    return (
        <Box sx={{ marginTop: 8 }}>
        <Typography variant="h6" sx={{ marginTop: 10, textAlign: 'center', fontSize: '3rem', fontFamily: 'Varela Round' }} gutterBottom>
            Your Profile
        </Typography>
        <Box sx={{marginLeft:'50px'}} > profilim diğer kullanıcılar tarafından görüntülensin:
      <Switch  {...label} defaultChecked />
      </Box>
      <Button onClick={handleEditClick}>Edit Profile</Button>
        <Box sx={{ marginLeft: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ position: 'relative', display: 'inline-block' }}>
                <Avatar
                    src={artistProfile ? BackendMediaPath + artistProfile.photo : ''}
                    sx={{
                        width: 200,
                        height: 200,
                        border: '2px solid #fff',
                        borderRadius: '50%',
                    }}
                />
                <Box>
                    <Typography variant="h6" gutterBottom>
                        {userInfo && userInfo.user ? userInfo.user.first_name : ''}   {userInfo && userInfo.user ? userInfo.user.last_name : ''}
                    </Typography>
                    <Typography> {userInfo && userInfo.user ? userInfo.user.email : ''} </Typography>
                </Box>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
  <AboutContent />
</Box>
            <video controls style={{ width: '100%', height: 'auto', margin: 2 }}>
            <source src={artistProfile ? BackendMediaPath + artistProfile.video : ''} type="video/mp4" />
                    Sorry, your browser doesn't support embedded videos.
           </video>
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
    <Typography variant="h6" noWrap>
      Edit Profile
    </Typography>
    <EditProfileForm profile={editedProfileData} onSave={handleSave} Close={handleCancel} />
  </Box>
</Drawer>
    </Box>
        )
    }
    
    export default Profile
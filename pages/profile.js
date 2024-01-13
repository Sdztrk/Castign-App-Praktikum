import React, { useContext, useEffect, useState } from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import API from '@/helpers/ApiBuilder';

import AppContext from '@/AppContext';

function Profile() {
    const router = useRouter();
    const { userInfo } = useContext(AppContext);

    // Use state to manage the artist profile
    const [artistProfile, setArtistProfile] = useState(null);

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

    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
        }}>
            {userInfo.loggedIn && (
                <>
                    <Typography variant="h6" gutterBottom>
                        User Information
                    </Typography>
                    <List>
                        {Object.entries(userInfo.user).map(([key, value]) => (
                            <ListItem key={key}>
                                <ListItemText primary={`${key}:`} secondary={value} />
                        </ListItem>
                        ))}
                    </List>
                </>)}
            </Box>
        )
    }
    
    export default Profile
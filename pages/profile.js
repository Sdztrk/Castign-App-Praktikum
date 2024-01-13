import React, { useContext, useEffect } from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useRouter } from 'next/navigation'


import AppContext from '@/AppContext';

function profile() {
    const router = useRouter()
    const { userInfo } = useContext(AppContext);

    useEffect(() => {
        if (userInfo.user === null) {return;}
        if (!userInfo.loggedIn) {router.push('/login');}
    }, [userInfo, router]);

    if (!userInfo) {
        return <Box sx={{ marginTop: 10, }}>Loading...</Box>;
    }
    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
        }}>
            {userInfo.loggedIn && (<>
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

export default profile
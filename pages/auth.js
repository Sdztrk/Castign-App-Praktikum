import React, { useEffect, useState } from 'react';
import Layout from '@/component/layout/layout';
import API from '@/helpers/api_builder';
import { Card, CardContent, Typography } from '@mui/material';

export default function Auth() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Uncomment if you want to create a user
        // const registerResponse = await API.post('register', { email: 'user2@user.com', password: "user", user_type: "personnel", user_role: "actor" });
        // console.log(registerResponse);
        
        const loginResponse = await API.post('login', { email: 'user@user.com', password: "user" });
        const accessToken = loginResponse?.access;
        
        const getUsersResponse = await API.get('get_users', accessToken);
        setUserData(getUsersResponse);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  if (!userData?.users) {
    return <Layout>Loading...</Layout>;
  }

  return (
    <Layout>
      {userData.users.map(user => (
        <Card key={user.email}>
          <CardContent>
            <Typography variant="h6">{`${user.first_name} ${user.last_name}`}</Typography>
            <Typography variant="subtitle1" color="textSecondary">Email: {user.email}</Typography>
            <Typography variant="subtitle2" color="textSecondary">Role: {user.user_role}</Typography>
          </CardContent>
        </Card>
      ))}
    </Layout>
  );
}

import React, { useEffect, useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Layout from '@/component/layout/layout'
import Cookies from "js-cookie";
import API from '@/helpers/ApiBuilder';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Dashboard() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const curentUser = await API.get('get_current_user', Cookies.get("accessToken"));
        console.log(curentUser)
        
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Layout>
        
    </Layout>
  );
}

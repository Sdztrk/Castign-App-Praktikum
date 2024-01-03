import React, { useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Layout from '@/component/layout/layout'
import styles from './Layout.module.css'
import ProductCard from '@/component/layout/ProductCard'
import Upside from '@/component/layout/Upside'
import CategoryCard from '@/component/layout/CategoryCard';

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
          <Upside/>
      <Box className={styles.cardContainer}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </Box>
      <CategoryCard/>
    </Layout>
  );
}



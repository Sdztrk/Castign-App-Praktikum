import React, { useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Layout from '@/component/layout/layout'
import styles from './Layout.module.css'
import ProductCard from '@/component/cards/ProductCard'
import Upside from '@/component/cards/Carousel'
import CategoryCard from '@/component/cards/CategoryCard';
import { MainCategories } from '@/constants/cardValues';

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
      </Box>
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 2, 
        width: '100%', 
        margin: 'auto'
      }}>
        {
          MainCategories.map((category, index) => (
            <CategoryCard 
              key={index} 
              cardImage={category.cardImage} 
              cardTitle={category.cardTitle} 
              urlPath={category.url_path} 
              tooltipText={category.tooltipText}
            />
          ))
        }
      </Box>
    </Layout>
  );
}



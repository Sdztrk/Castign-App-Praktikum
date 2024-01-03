import * as React from 'react';
import Box from '@mui/material/Box';
import Layout from '@/component/layout/layout'
import styles from './Layout.module.css'
import ProductCard from '@/component/layout/ProductCard'
import Upside from '@/component/layout/Upside'
import CategoryCard from '@/component/layout/CategoryCard'
import SubCategory from '@/component/layout/SubCategory';
import Teams from './Teams';
export default function dashboard() {
  return (
    <Layout>
          <Upside/>
          <CategoryCard/>
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
      <SubCategory/>
      <Teams/>
    </Layout>
  );
}



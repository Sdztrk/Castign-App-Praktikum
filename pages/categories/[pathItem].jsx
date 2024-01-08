import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import SubCategory from '@/component/cards/SubCategoryCard'
import ProductCard from '@/component/cards/ProductCard'
import { CategoriesJSON } from '@/constants/Categories'

const Teams = () => {
  const { query } = useRouter();
  const subCategoryPathItem = query.pathItem;
  const category = CategoriesJSON[subCategoryPathItem];
  const [activeSubCategory, setActiveSubCategory] = useState("")


  const handleSubCategoryClick = (title) => {
    setActiveSubCategory((prevTitle) => (prevTitle === title ? "" : title))
  }

  if (!category?.CategoryTitle) {
    return <Box>Loading...</Box>;
  }


  return (
    <Box>
      <Typography variant="h1" gutterBottom sx={{ marginTop: '85px' }}>
        {category.CategoryTitle}
      </Typography>
      <Box sx={{ flexWrap: 'wrap', display: 'flex', m: '10px', justifyContent: 'center', alignItems: 'center', mt: '25px' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', m: '20px', justifyContent: 'center' }}>
          {category.SubCategories.map((subCategory, index) => (
            <SubCategory
              key={index}
              {...subCategory}
              onClick={handleSubCategoryClick}
              isActive={activeSubCategory === subCategory.subCategoryTitle}
            />
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {Array.from({ length: 20 }).map((_, index) => (
            <Box key={index} sx={{ mr: '30px' }}>
              <ProductCard cardTitle={activeSubCategory} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Teams;

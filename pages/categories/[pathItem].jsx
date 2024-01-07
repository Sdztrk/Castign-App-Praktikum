import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import SubCategory from '@/component/cards/SubCategoryCard';
import ProductCard from '@/component/cards/ProductCard';
import { CategoriesJSON } from '@/constants/Categories';

const Teams = () => {
  const { query } = useRouter();
  const subCategoryPathItem = query.pathItem;
  const category = CategoriesJSON[subCategoryPathItem];

  const [cardTitle, setCardTitle] = useState("");

  if (!category?.CategoryTitle) {
    return <Box>Loading...</Box>;
  }

  const handleSubCategoryClick = (title) => {
    console.log(title)
    setCardTitle(title);
    
  };

  return (
    <Box>
      <Typography variant="h1" gutterBottom sx={{ marginTop: '85px' }}>
        {category.CategoryTitle}
      </Typography>
      <Box sx={{ flexWrap: 'wrap', display: 'flex', m: '10px', justifyContent: 'center', alignItems: 'center', mt: '25px' }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', m: '20px', justifyContent: 'center' }}>
          {category.SubCategories.map((subCategory, index) => (
            <SubCategory key={index} {...subCategory} setCardTitle={setCardTitle} />
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {Array.from({ length: 20 }).map((_, index) => (
            <Box key={index} sx={{ mr: '30px' }}>
              <ProductCard cardTitle={cardTitle} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Teams;

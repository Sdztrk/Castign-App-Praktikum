import React from 'react';
import SubCategory from '@/component/cards/SubCategoryCard';
import ProductCard from '@/component/cards/ProductCard';
import { Box } from '@mui/material';
import { subCategories } from '@/constants/Teams';
const Teams = () => {
  const productCardTeams = [
    {
      cardTitle: "BAŞLIK",
      cardDescription: 'DİĞER İÇERİKLER',
      imageUrls: [
        'images/m-1.jpg',
        'images/m-2.jpg',
        'images/m-3.jpg',
        'images/m-4.jpg',
      ]
    },
    {
      cardTitle: "BAŞLIK",
      cardDescription: 'DİĞER İÇERİKLER',
      imageUrls: [
        'images/carousel/carousel_2.png',
        'images/carousel/carousel_0.png',
        'images/carousel/carousel_1.png',
        'images/m-4.jpg',
      ]
    },
    {
      cardTitle: "BAŞLIK",
      cardDescription: 'DİĞER İÇERİKLER',
      imageUrls: [
        'images/carousel/carousel_2.png',
        'images/carousel/carousel_0.png',
        'images/carousel/carousel_1.png',
        'images/m-4.jpg',
      ]
    },
    {
      cardTitle: "BAŞLIK",
      cardDescription: 'DİĞER İÇERİKLER',
      imageUrls: [
        'images/carousel/carousel_2.png',
        'images/carousel/carousel_0.png',
        'images/carousel/carousel_1.png',
        'images/m-4.jpg',
      ]
    },
    {
      cardTitle: "BAŞLIK",
      cardDescription: 'DİĞER İÇERİKLER',
      imageUrls: [
        'images/carousel/carousel_2.png',
        'images/carousel/carousel_0.png',
        'images/carousel/carousel_1.png',
        'images/m-4.jpg',
      ]
    },
    {
      cardTitle: "BAŞLIK",
      cardDescription: 'DİĞER İÇERİKLER',
      imageUrls: [
        'images/carousel/carousel_2.png',
        'images/carousel/carousel_0.png',
        'images/carousel/carousel_1.png',
        'images/m-4.jpg',
      ]
    },
  ];

  return (
    <Box style={{ display: 'flex', alignItems: 'flex-start', margin: '10px', marginTop: '85px' }}>
      <Box style={{ alignSelf: 'flex-start', flexDirection: 'column' }}>
        {subCategories.map((subCategory, index) => (
          <SubCategory key={index} {...subCategory} />
        ))}
      </Box>
      <Box style={{ display: 'flex', marginLeft: '100px', flexWrap: 'wrap'}}>
        {productCardTeams.map((productCard, index) => (
          <Box key={index} style={{ marginRight: '30px' }}>
            <ProductCard {...productCard} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Teams;

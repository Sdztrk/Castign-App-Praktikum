import React from 'react';
import SubCategory from '@/component/cards/SubCategoryCard';
import ProductCard from '@/component/cards/ProductCard';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import { SubCategoriesJSON } from '@/constants/SubCategories';

const Teams = () => {
  const router = useRouter();  // Access the Next.js router for route-related functionalities
  const subCategoryPathItem = router.query.pathItem;
  const categoryJson  = SubCategoriesJSON[subCategoryPathItem]

  const productCardTeams = [
    {
      cardTitle: "BAŞLIK",
      cardDescription: 'DİĞER İÇERİKLER',

    },
    {
      cardTitle: "BAŞLIK",
      cardDescription: 'DİĞER İÇERİKLER',
      imageUrls: [
        '/images/carousel/carousel_2.png',
        '/images/carousel/carousel_0.png',
        '/images/carousel/carousel_1.png',
        '/images/m-4.jpg',
      ]
    },
    {
      cardTitle: "BAŞLIK",
      cardDescription: 'DİĞER İÇERİKLER',
      imageUrls: [
        '/images/carousel/carousel_2.png',
        ':images/carousel/carousel_0.png',
        '/images/carousel/carousel_1.png',
        '/images/m-4.jpg',
      ]
    },
    {
      cardTitle: "BAŞLIK",
      cardDescription: 'DİĞER İÇERİKLER',
      imageUrls: [
        '/images/carousel/carousel_2.png',
        '/images/carousel/carousel_0.png',
        '/images/carousel/carousel_1.png',
        '/images/m-4.jpg',
      ]
    },
    {
      cardTitle: "BAŞLIK",
      cardDescription: 'DİĞER İÇERİKLER',
      imageUrls: [
        '/images/carousel/carousel_2.png',
        '/images/carousel/carousel_0.png',
        '/images/carousel/carousel_1.png',
        ':images/m-4.jpg',
      ]
    },
    {
      cardTitle: "BAŞLIK",
      cardDescription: 'DİĞER İÇERİKLER',
      imageUrls: [
        '/images/carousel/carousel_2.png',
        '/images/carousel/carousel_0.png',
        '/images/carousel/carousel_1.png',
        '/images/m-4.jpg',
      ]
    },
    {
      cardTitle: "BAŞLIK",
      cardDescription: 'DİĞER İÇERİKLER',
      imageUrls: [
        '/images/carousel/carousel_2.png',
        '/images/carousel/carousel_0.png',
        '/images/carousel/carousel_1.png',
        '/images/m-4.jpg',
      ]
    },
    {
      cardTitle: "BAŞLIK",
      cardDescription: 'DİĞER İÇERİKLER',
      imageUrls: [
        '/images/carousel/carousel_2.png',
        '/images/carousel/carousel_0.png',
        '/images/carousel/carousel_1.png',
        '/images/m-4.jpg',
      ]
    },
  ];
  if (!categoryJson?.CategoryTitle) {
    return <Box>Loading...</Box>;
  }
  return (
    <Box >
      <Typography variant="h1" gutterBottom style={{ marginTop: '85px' }}>{categoryJson?.CategoryTitle}</Typography>
      <Box style={{
        flexWrap: 'wrap', display: 'flex', margin: '10px', justifyContent: 'center', alignItems: 'center', marginTop: '25px'
      }}>
        <Box style={{ display: 'flex', flexWrap: 'wrap', margin: '20px', justifyContent: 'center' }} >
          {categoryJson.SubCategories.map((subCategory, index) => (
            <SubCategory key={index} {...subCategory} />
          ))}
        </Box>
        <Box style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {productCardTeams.map((productCard, index) => (
            <Box key={index} style={{ marginRight: '30px' }}>
              <ProductCard {...productCard} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box >
  );
};

export default Teams;

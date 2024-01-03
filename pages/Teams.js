import React from 'react'
import SubCategory from '@/component/cards/SubCategoryCard'
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import EscalatorWarningOutlinedIcon from '@mui/icons-material/EscalatorWarningOutlined';

const Teams = () => {
    const subCategories = [
    { title: "HALİL", icon: <FactoryOutlinedIcon /> },
    { title: "İBRAHİM", icon: <StopCircleOutlinedIcon /> },
    { title: "DEMİR ", icon: <EscalatorWarningOutlinedIcon /> },
    { title: "HALİL", icon: <FactoryOutlinedIcon /> },
    { title: "İBRAHİM", icon: <StopCircleOutlinedIcon /> },
    { title: "DEMİR ", icon: <EscalatorWarningOutlinedIcon /> },
    { title: "HALİL", icon: <FactoryOutlinedIcon /> },
    { title: "İBRAHİM", icon: <StopCircleOutlinedIcon /> },
    { title: "DEMİR ", icon: <EscalatorWarningOutlinedIcon /> },
      ]
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '10px' }}>
    {subCategories.map((subCategory, index) => (
      <SubCategory key={index} {...subCategory} />
    ))}
  </div>
  )
}

export default Teams
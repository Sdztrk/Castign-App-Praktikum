import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import { useRouter } from 'next/router'

const CategoryCard = ({ image, title}) => {
  const [hovered, setHovered] = useState(false)
  const router = useRouter()


  const handleHover = () => {
    setHovered(true)
  }

  const handleLeave = () => {
    setHovered(false)
  }
  const redirectToAuth = () => {
    router.push("/Teams")
  }

  const calculateOverlayStyle = () => {
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      opacity: hovered ? 0 : 0.4, 
      transition: 'opacity 0.3s',
    }
  }

  const handleClick = () => {
    redirectToAuth()
  }
  const getTooltipContent = () => {
    switch (title) {
      case 'EKİPLER':
        return "Lorem Ipsum is simply dummy text for EKİPLER category.Lorem Ipsum is simply dummy text for FİRMALAR category.Lorem Ipsum is simply dummy text for FİRMALAR category.Lorem Ipsum is simply dummy text for FİRMALAR category.Lorem Ipsum is simply dummy text for FİRMALAR category.Lorem Ipsum is simply dummy text for FİRMALAR category.Lorem Ipsum is simply dummy text for FİRMALAR category.";
      case 'SANATÇILAR':
        return "Lorem Ipsum is simply dummy text for SANATÇILAR category.Lorem Ipsum is simply dummy text for FİRMALAR category.Lorem Ipsum is simply dummy text for FİRMALAR category.Lorem Ipsum is simply dummy text for FİRMALAR category.Lorem Ipsum is simply dummy text for FİRMALAR category.Lorem Ipsum is simply dummy text for FİRMALAR category.Lorem Ipsum is simply dummy text for FİRMALAR category.Lorem Ipsum is simply dummy text for FİRMALAR category.";
      case 'AJANSLAR':
        return "Lorem Ipsum is simply dummy text for AJANSLAR category Lorem Ipsum is simply dummy text for AJANSLAR categoryLorem Ipsum is simply dummy text for AJANSLAR categoryLorem Ipsum is simply dummy text for AJANSLAR categoryLorem Ipsum is simply dummy text for AJANSLAR categoryLorem Ipsum is simply dummy text for AJANSLAR categoryLorem Ipsum is simply dummy text for AJANSLAR categoryLorem Ipsum is simply dummy text for AJANSLAR category.";
      case 'FİRMALAR':
        return "Lorem Ipsum is simply dummy text for FİRMALAR category. Lorem Ipsum is simply dummy text for FİRMALAR category.Lorem Ipsum is simply dummy text for FİRMALAR category.Lorem Ipsum is simply dummy text for FİRMALAR category.Lorem Ipsum is simply dummy text for FİRMALAR category.Lorem Ipsum is simply dummy text for FİRMALAR category.Lorem Ipsum is simply dummy text for FİRMALAR category.Lorem Ipsum is simply dummy text for FİRMALAR category.";
      default:
        return ''
    }
  };

  return (
    <box>
      <Tooltip title={getTooltipContent()} arrow>
        <Card
          style={{
            width: 250,
            height: 350,
            position: 'relative',
            overflow: 'hidden',
            margin: '10px',
            transition: 'transform 0.3s',
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          onClick={handleClick} 
        >
             <box style={calculateOverlayStyle()}></box>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
            }}
          />
          <CardContent style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontFamily: '', fontSize: 'Your-Font-Size' }}>
            <Typography gutterBottom variant="h5" component="box">
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Tooltip>
    </box>
  );
};

const Categories = () => {
  const categories = [
    { image: "İmages/ekip.png", title: "EKİPLER" },
    { image: "İmages/sanatçı.jpeg", title: "SANATÇILAR" },
    { image: "İmages/ajans.jpeg", title: "AJANSLAR" },
    { image: "İmages/firma.png", title: "FİRMALAR" },
  ]

  return (
    <box style={{ display: 'flex', justifyContent: 'space-around', margin: '50px', flexWrap: 'wrap' }}>
      {categories.map((category, index) => (
        <CategoryCard key={index} {...category} />
      ))}
    </box>
  );
};

export default Categories

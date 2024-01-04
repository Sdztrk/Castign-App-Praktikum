import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import { useRouter } from 'next/navigation'

const CategoryCard = ({ cardImage, cardTitle, urlPath, tooltipText }) => {
  const [hovered, setHovered] = useState(false)
  const router = useRouter()

  const handleHover = () => {
    setHovered(true)
  };

  const handleLeave = () => {
    setHovered(false)
  };

  const calculateOverlayStyle = () => {
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      opacity: hovered ? 0 : 0.6, 
      transition: 'opacity 0.3s',
    }
  }
  return (
    <box>
      <Tooltip title={tooltipText} arrow>
        <Card
          style={{
            width: 250,
            height: 350,
            position: 'relative',
            overflow: 'hidden',
            margin: '10px',
            transition: 'transform 0.3s',
            cursor: 'pointer'          
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          onClick={() => router.push(urlPath)}
        >
             <box style={calculateOverlayStyle()}></box>
          <CardMedia
            component="img"
            height="140"
            image={cardImage}
            alt={cardTitle}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
            }}
          />
          <CardContent style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontFamily: '', fontSize: 'Your-Font-Size' }}>
            <Typography gutterBottom variant="h5" component="box">
              {cardTitle}
            </Typography>
          </CardContent>
        </Card>
      </Tooltip>
    </box>
  );
};
export default CategoryCard

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IosShareIcon from '@mui/icons-material/IosShare';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const RecipeReviewCard = ({ title, description }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [isFavorite, setIsFavorite] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null)
  };

  const handleButtonClick = () => {
    setIsFavorite(!isFavorite)
  };

  const handleExpandClick = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length)
  };

  const handlePrevClick = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length)
  };

  const imageUrls = [
    'İmages/m-1.jpg',
    'İmages/m-2.jpg',
    'İmages/m-3.jpg',
    'İmages/m-4.jpg',
  ];
  // "kart alanı boş durmaması için konuldu"
  const defaultTitle = "Başlık";
  const defaultDescription = "Açıklama buraya gelecek."
  return (
    <Card sx={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
      <CardMedia
        component="div"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          maxHeight: 400,
        }}
      >
        <img
          src={imageUrls[selectedImageIndex]}
          style={{ width: '500px', height: '300px', display: 'block' }}
        />
        <IconButton
          aria-label="prev"
          onClick={handlePrevClick}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <IconButton
          aria-label="next"
          onClick={handleExpandClick}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </CardMedia>

      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {defaultTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {defaultDescription}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <>
          <IconButton onClick={handleClick}>
            <IosShareIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>
              <WhatsAppIcon /> WhatsApp
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <FacebookIcon /> Facebook
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <InstagramIcon /> Instagram
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <TwitterIcon /> Twitter
            </MenuItem>
          </Menu>
        </>
        <IconButton aria-label="add to favorites" onClick={handleButtonClick}>
          <FavoriteIcon style={{ color: isFavorite ? 'red' : 'inherit' }} />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default RecipeReviewCard

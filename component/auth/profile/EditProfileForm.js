import React, { useState } from 'react';
import { Box, TextField, Button, Typography, InputAdornment } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import WcIcon from '@mui/icons-material/Wc';
import CakeIcon from '@mui/icons-material/Cake';
import LanguageIcon from '@mui/icons-material/Language';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HeightIcon from '@mui/icons-material/Height';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PaletteIcon from '@mui/icons-material/Palette';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'; 

const EditProfileForm = ({ profile, onSave }) => {
  const [formData, setFormData] = useState(profile);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formData);
  };
  const handleCancel = () => {
     setFormData(profile); 
     setIsEditing(false); 
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2 }}>
      <Typography variant="h6">General Information</Typography>
      <TextField
        fullWidth
        label="University"
        name="university"
        value={formData.university || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SchoolIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="Agency"
        name="agency"
        value={formData.agency || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <WorkIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="Gender"
        name="gender"
        value={formData.gender || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <WcIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="Birthdate"
        name="birthdate"
        value={formData.birthdate || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CakeIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="Languages"
        name="languages"
        value={formData.languages || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LanguageIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="Branch"
        name="branch"
        value={formData.branch || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountTreeIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="Department"
        name="department"
        value={formData.department || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BusinessCenterIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="Driving Licence"
        name="driving_licence"
        value={formData.driving_licence || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DriveEtaIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="Manager"
        name="manager"
        value={formData.manager || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonSearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="References"
        name="references"
        value={formData.references || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <StarBorderIcon />
            </InputAdornment>
          ),
        }}
      />

      <Typography variant="h6" sx={{ mt: 4 }}>Physical Features</Typography>
      <TextField
        fullWidth
        label="Eye Color"
        name="eye_color"
        value={formData.eye_color || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <VisibilityIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="Height"
        name="length"
        value={formData.length || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <HeightIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="Weight"
        name="weight"
        value={formData.weight || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FitnessCenterIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="Skin Color"
        name="skin_color"
        value={formData.skin_color || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PaletteIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="Body Measurements"
        name="body_size"
        value={formData.body_size || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccessibilityIcon />
            </InputAdornment>
          ),
        }}
      />

      <Typography variant="h6" sx={{ mt: 4 }}>Social Media Accounts</Typography>
      <TextField
        fullWidth
        label="Facebook Address"
        name="facebook"
        value={formData.facebook || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FacebookIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="Instagram Address"
        name="instagram"
        value={formData.instagram || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <InstagramIcon />
            </InputAdornment>
          ),
        }}
      />

      <Typography variant="h6" sx={{ mt: 4 }}>Address</Typography>
      <TextField
        fullWidth
        label="Country"
        name="citizen"
        value={formData.citizen || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="Address"
        name="address"
        value={formData.address || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <HomeIcon />
            </InputAdornment>
          ),
        }}
      />
       <Typography variant="h6" sx={{ mt: 4 }}>Contact information</Typography>
      <TextField
        fullWidth
        label="Facebook Address"
        name="facebook"
        value={formData.facebook || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FacebookIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="Instagram Address"
        name="instagram"
        value={formData.instagram || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <InstagramIcon />
            </InputAdornment>
          ),
        }}
      />
        <TextField
        fullWidth
        label="Telefon Numarası"
        name="phone"
        value={formData.phone || ''}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Save Changes
      </Button>
      <Button variant="outlined" color="error" onClick={handleCancel}>
          Cancel
        </Button>
    </Box>
  );
};

export default EditProfileForm;

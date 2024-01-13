import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ personal, setSelectedUserRole }) {

  const handleChange = (event) => {
    setSelectedUserRole(event.target.value);
  };

  const menuItems = personal
    ? [
        <MenuItem key="actor" value={"Actor"}>
          Oyuncu
        </MenuItem>,
        <MenuItem key="artist" value={"Artist"}>
          Sanatci
        </MenuItem>,
        <MenuItem key="director" value={"Director"}>
          Yönetmen
        </MenuItem>,
      ]
    : [
        <MenuItem key="corporate" value={"Corporate"}>
          Kurumsal 
        </MenuItem>,
        <MenuItem key="corporate_1" value={"Corporate 1"}>
          Kurumsal 1
        </MenuItem>,
        <MenuItem key="corporate_2" value={"Corporate 2"}>
          Kurumsal 2
        </MenuItem>,
      ];

  return (
    <Box sx={{ minWidth: 120, mt:1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Rol</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          {menuItems}
        </Select>
      </FormControl>
    </Box>
  );
}

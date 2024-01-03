import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ personal }) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const menuItems = personal
    ? [
        <MenuItem key="Actor" value={"Actor"}>
          Oyuncu
        </MenuItem>,
        <MenuItem key="Artist" value={"Artist"}>
          Sanatci
        </MenuItem>,
        <MenuItem key="Director" value={"Director"}>
          Yönetmen
        </MenuItem>,
      ]
    : [
        <MenuItem key="Corporate" value={"Corporate"}>
          Kurumsal 
        </MenuItem>,
        <MenuItem key="Corporate 1" value={"Corporate 1"}>
          Kurumsal 1
        </MenuItem>,
        <MenuItem key="Corporate 2" value={"Corporate 2"}>
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
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {menuItems}
        </Select>
      </FormControl>
    </Box>
  );
}

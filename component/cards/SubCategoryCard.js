import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import IconButton from '@mui/material/IconButton';

const SubCategory = ({ title = "başlik", icon = <AccountBoxIcon /> }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Card
      style={{
        width: 120,
        height: 120,
        margin: 'auto',
        marginTop: 10,
        backgroundColor: "#9786BF",
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s',
        cursor: 'pointer' ,
        margin:10 
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardContent style={{ textAlign: 'center' }}>
        <IconButton
          style={{ fontSize: 80, marginBottom: 1, backgroundColor: "white" }}
        >
          {icon}
        </IconButton>
        <Typography variant="h6" style={{ color: 'white' }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SubCategory;

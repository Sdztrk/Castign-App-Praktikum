import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import IconButton from '@mui/material/IconButton';

const SubCategory = ({ subCategoryTitle = "Title", icon = <AccountBoxIcon />, setCardTitle }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Card
      style={{
        width: 120,
        height: 120,
        margin: 'auto',
        marginTop: 10,
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s',
        cursor: 'pointer',
        margin: 10,
        boxShadow: '1px 4px 8px 1px rgba(0, 0, 0, 0.5)', // Enhanced shadow
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setCardTitle(subCategoryTitle)}
    >
      <CardContent style={{ textAlign: 'center' }}>
        <IconButton
          style={{ fontSize: 80, marginBottom: 1, backgroundColor: "white" }}
        >
          {icon}
        </IconButton>
        <Typography>
          {subCategoryTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SubCategory;

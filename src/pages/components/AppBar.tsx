import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Image from 'next/image';

const Logo = styled('img')({
  height: 20, 
  marginLeft: 38,
});

const MyAppBar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar sx={{ minHeight: 100 }}> 
        <Logo src="logoipsum-253 1.png" alt="Logo" />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Meu App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;

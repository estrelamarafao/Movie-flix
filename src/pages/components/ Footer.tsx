import React from 'react'; 
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#726BEA', display: 'flex', flexDirection: 'column', color: 'white', padding: '16px', height: '150px' }}>
      <div style={{ display: 'flex', paddingLeft: '64px' }}>
        <Box style={{ marginRight: '10px', marginTop: '15px' }}> 
          <img 
            src="logoipsum-253 1 (1).png" 
            alt="Logo" 
            style={{ maxWidth: '150px', height: 'auto' }} 
          />
        </Box>
      </div>

      <Box
        sx={{
          width: 'calc(100% - 128px)', 
          borderBottom: '1px solid white',
          margin: '15px 64px', 
        }}
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between', 
          alignItems: 'center',
          width: 'calc(100% - 128px)', 
          margin: '10px 64px', 
          height: 'auto', 
        }}
      >
      
        <Box sx={{ fontSize: '14px', lineHeight: '24px' }}>
          <span>Terms & Conditions</span>
          <span style={{ marginLeft: '20px' }}>Privacy Policy</span>
        </Box>

        <Box sx={{ display: 'flex', gap: '5px' }}>
          <IconButton color="inherit" aria-label="facebook">
            <Facebook />
          </IconButton>
          <IconButton color="inherit" aria-label="twitter">
            <Twitter />
          </IconButton>
          <IconButton color="inherit" aria-label="instagram">
            <Instagram />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

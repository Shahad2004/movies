import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { GitHub, Twitter, LinkedIn } from '@mui/icons-material'; // Choose icons you need

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        color: 'white',
        py: 3,
        px: 2,
        mt: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <Typography variant="body1">
          © {new Date().getFullYear()} My Movie Website. All rights reserved.
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, mt: { xs: 2, sm: 0 } }}>
          <Link href="#" color="inherit">
            <GitHub />
          </Link>
          <Link href="#" color="inherit">
            <Twitter />
          </Link>
          <Link href="#" color="inherit">
            <LinkedIn />
          </Link>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2, mt: { xs: 2, sm: 0 } }}>
          <Link href="/privacy" color="inherit" underline="hover">
            Privacy Policy
          </Link>
          <Link href="/terms" color="inherit" underline="hover">
            Terms of Service
          </Link>
          <Link href="/contact" color="inherit" underline="hover">
            Contact Us
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
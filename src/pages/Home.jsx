import React from 'react';
import Box from '@mui/material/Box';


const Home = () => {
  return (
    <div style={{ 
        textAlign: "center", 
        padding: "20px", 
        backgroundColor: "#fff", 
        width: "100%", 
        margin: 0 
      }}>
        <h1>Welcome to Movies!</h1>
        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: 2, 
            width: "100%" 
          }}>

          </Box>
          </div>
  );
};

export default Home;

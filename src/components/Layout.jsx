/** @jsxImportSource @emotion/react */
import React from 'react';
import { keyframes } from '@emotion/react';
import Box from '@mui/material/Box';

const gradientBGLight = keyframes`
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
`;

const gradientBGDark = keyframes`
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
`;

const floatBlob = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(15deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const Layout = ({ children, darkMode }) => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent',
        transition: 'background 0.5s ease',
      }}
    >


      {/* Page Content */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

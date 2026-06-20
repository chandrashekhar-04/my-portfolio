/** @jsxImportSource @emotion/react */
import React from 'react';
import { keyframes } from '@emotion/react';
import Box from '@mui/material/Box';

const gradientBG = keyframes`
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
`;

const floatBlob = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(15deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(-45deg, #ff416c, #ff4b2b, #1e90ff, #32cd32)',
        backgroundSize: '400% 400%',
        animation: `${gradientBG} 20s ease infinite`,
      }}
    >
      {/* Floating Blobs */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <Box
          component="svg"
          sx={{
            position: 'absolute',
            width: '120%',
            left: '-10%',
            bottom: '-20%',
            opacity: 0.3,
            animation: `${floatBlob} 25s ease-in-out infinite`,
          }}
          viewBox="0 0 600 600"
        >
          <path
            fill="#8e2de2"
            d="M421,351Q403,452,304,459Q205,466,151,374Q97,282,186,204Q275,126,377,169Q479,212,421,351Z"
          />
        </Box>
        <Box
          component="svg"
          sx={{
            position: 'absolute',
            width: '100%',
            right: '-15%',
            top: '-10%',
            opacity: 0.25,
            animation: `${floatBlob} 30s ease-in-out infinite reverse`,
          }}
          viewBox="0 0 600 600"
        >
          <path
            fill="#4a00e0"
            d="M421,351Q403,452,304,459Q205,466,151,374Q97,282,186,204Q275,126,377,169Q479,212,421,351Z"
          />
        </Box>
      </Box>

      {/* Page Content */}
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

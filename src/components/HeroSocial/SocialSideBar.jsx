/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, keyframes } from '@emotion/react';
import { IconButton, Paper } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

// Slide in animation from the left
const slideIn = keyframes`
  from {
    transform: translateX(-100%) translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateX(0) translateY(-50%);
    opacity: 1;
  }
`;

export default function SocialSidebar() {
  const iconStyle = {
    fontSize: 32,
    color: '#212121',
  };

  return (
    <Paper
      elevation={4}
      css={css`
        animation: ${slideIn} 1s ease-out;
      `}
      sx={{
        position: 'absolute',
        top: '60%',
        left: 0,
        transform: 'translateY(-50%)',
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        gap: 2,
        p: 1,
        borderRadius: '0 8px 8px 0',
        zIndex: 1300,
      }}
    >
      <IconButton href="https://www.linkedin.com/in/c-billade" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon sx={iconStyle} />
      </IconButton>
      <IconButton href="https://x.com/CBillade44895" target="_blank" rel="noopener noreferrer">
        <TwitterIcon sx={iconStyle} />
      </IconButton>
      <IconButton href="https://www.youtube.com/@cbcreatives9426" target="_blank" rel="noopener noreferrer">
        <YouTubeIcon sx={iconStyle} />
      </IconButton>
      <IconButton href="https://github.com/chandrashekhar-04" target="_blank" rel="noopener noreferrer">
        <GitHubIcon sx={iconStyle} />
      </IconButton>
    </Paper>
  );
}

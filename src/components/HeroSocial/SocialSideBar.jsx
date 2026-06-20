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
    transform: translateX(-120%) translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateX(0) translateY(-50%);
    opacity: 1;
  }
`;

// Hover glow animation
const hoverGlow = keyframes`
  0%, 100% { filter: drop-shadow(0 0 0px #8b5cf6); }
  50% { filter: drop-shadow(0 0 10px #8b5cf6); }
`;

export default function SocialSidebar() {
  const iconStyle = {
    fontSize: 32,
    color: '#212121',
    transition: 'transform 0.3s, color 0.3s',
    '&:hover': {
      color: '#8b5cf6',
      transform: 'scale(1.2)',
      animation: `${hoverGlow} 1s ease-in-out infinite`,
    },
  };

  const socialLinks = [
    { href: "https://www.linkedin.com/in/c-billade", icon: <LinkedInIcon /> },
    { href: "https://x.com/CBillade44895", icon: <TwitterIcon /> },
    { href: "https://www.youtube.com/@cbcreatives9426", icon: <YouTubeIcon /> },
    { href: "https://github.com/chandrashekhar-04", icon: <GitHubIcon /> },
  ];

  return (
    <Paper
      elevation={4}
      css={css`
        animation: ${slideIn} 0.8s ease-out;
      `}
      sx={{
        position: 'absolute', // relative to Hero container
        top: '60%',
        left: 0,
        transform: 'translateY(-50%)',
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        gap: 2,
        p: 1,
        borderRadius: '0 12px 12px 0',
        zIndex: 2,
        backgroundColor: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(6px)',
      }}
    >
      {socialLinks.map((link, idx) => (
        <IconButton
          key={idx}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          sx={iconStyle}
        >
          {link.icon}
        </IconButton>
      ))}
    </Paper>
  );
}

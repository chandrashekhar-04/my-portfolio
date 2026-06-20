/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { css, keyframes } from '@emotion/react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SocialSidebar from './SocialSideBar';

/** ===== Animations ===== */
const colorGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const floatBlob = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(10deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const movingGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

/** ===== Scroll Handler ===== */
const handleScrollToProjects = () => {
  const element = document.getElementById('projects');
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};

/** ===== Hero Component ===== */
const Hero = ({ darkMode }) => {
  return (
    <Box
      id="home"
      sx={{
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: darkMode
          ? 'linear-gradient(135deg, #1f2937, #111827, #1f2937, #111827)'
          : 'linear-gradient(135deg, #f8fafc, #ffffff, #f1f5f9, #fefefe)',
        backgroundSize: '400% 400%',
        animation: `${movingGradient} 25s ease infinite`,
        transition: 'background 0.5s',
      }}
    >
      {/* Social Sidebar */}
      <SocialSidebar darkMode={darkMode} />

      {/* Floating Blobs */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Box
          component="svg"
          sx={{
            position: 'absolute',
            width: '150%',
            left: '-25%',
            bottom: '-25%',
            opacity: darkMode ? 0.05 : 0.15,
            animation: `${floatBlob} 35s ease-in-out infinite`,
            transition: 'opacity 0.5s',
          }}
          viewBox="0 0 600 600"
        >
          <path
            fill={darkMode ? '#374151' : '#d1d5db'}
            d="M421,351Q403,452,304,459Q205,466,151,374Q97,282,186,204Q275,126,377,169Q479,212,421,351Z"
          />
        </Box>
        <Box
          component="svg"
          sx={{
            position: 'absolute',
            width: '120%',
            right: '-20%',
            top: '-15%',
            opacity: darkMode ? 0.05 : 0.12,
            animation: `${floatBlob} 40s ease-in-out infinite reverse`,
            transition: 'opacity 0.5s',
          }}
          viewBox="0 0 600 600"
        >
          <path
            fill={darkMode ? '#2563eb' : '#e0f2fe'}
            d="M421,351Q403,452,304,459Q205,466,151,374Q97,282,186,204Q275,126,377,169Q479,212,421,351Z"
          />
        </Box>
      </Box>

      {/* Hero Content */}
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Stack
          spacing={4}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            px: { xs: 2, sm: 4 },
            py: { xs: 6, sm: 10 },
          }}
        >
          {/* Heading */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
              fontWeight: 'bold',
              lineHeight: 1.2,
              color: darkMode ? 'white' : 'black',
              animation: `${fadeInUp} 1s ease-out forwards`,
            }}
          >
            <p>HEY, I'M</p>{' '}
            <span
              css={css`
                background: linear-gradient(270deg, #ff416c, #ff4b2b, #32cd32, #1e90ff);
                background-size: 800% 800%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: ${colorGradient} 8s ease infinite;
                font-weight: 900;
              `}
            >
              CHANDRASHEKHAR
            </span>
          </Typography>

          {/* Subheading */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              color: darkMode ? '#d1d5db' : '#4b5563',
              animation: `${fadeInUp} 1s ease-out 0.4s forwards`,
              opacity: 0,
            }}
          >
            MERN Stack Developer | Web Enthusiast | Problem Solver
          </Typography>

          {/* Buttons */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
            <Button
              component="a"
              href="/CV.pdf"
              download="Chandrashehar_Billade.pdf"
              variant="contained"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                borderRadius: 3,
                boxShadow: 2,
                background: 'linear-gradient(90deg, #8e2de2, #4a00e0)',
                animation: `${fadeInUp} 1s ease-out 0.6s forwards`,
                opacity: 0,
                '&:hover': {
                  background: 'linear-gradient(90deg, #4a00e0, #8e2de2)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              Download Resume
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={handleScrollToProjects}
              sx={{
                borderColor: '#4a00e0',
                color: '#4a00e0',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                borderRadius: 3,
                animation: `${fadeInUp} 1s ease-out 0.75s forwards`,
                opacity: 0,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(74,0,224,0.1)',
                  transform: 'scale(1.05)',
                  borderColor: '#8e2de2',
                },
              }}
            >
              View Projects
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;

/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { css, keyframes } from '@emotion/react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const colorChange = keyframes`
  0% { color: #ff4b2b; }
  25% { color: #ff416c; }
  50% { color: #1e90ff; }
  75% { color: #32cd32; }
  100% { color: #ff4b2b; }
`;

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const handleScrollToProjects = () => {
  const element = document.getElementById('projects');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};


const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/010/405/542/non_2x/modern-white-abstract-background-white-abstract-use-for-business-corporate-institution-poster-template-party-festive-seminar-white-futuristic-gradient-eps10-illustration-free-vector.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
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
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
              fontWeight: 'bold',
              lineHeight: 1.2,
              color: 'black',
              animation: `${fadeInUp} 1s ease-out forwards`,
            }}
          >
            HEY, I'M{' '}
            <span
              css={css`
                animation: ${colorChange} 5s infinite ease-in-out;
                font-weight: 900;
              `}
            >
              CHANDRASHEKHAR
            </span>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px' },
              color: '#333',
              lineHeight: 1.7,
              animation: `${fadeInUp} 1s ease-out 0.3s forwards`,
              opacity: 0,
            }}
          >
            As a passionate learner, programmer, and aspiring front end web developer, I thrive on the excitement of building and creating in the digital realm. I enjoy creating beautiful websites because I feel pleasure to create something that not only looks good but also provides value to the users.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={handleScrollToProjects}
            sx={{
              animation: `${fadeInUp} 1s ease-out 0.6s forwards`,
              opacity: 0,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            View Projects
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;

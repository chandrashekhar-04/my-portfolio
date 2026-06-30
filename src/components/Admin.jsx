import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Admin = ({ darkMode }) => {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 3,
        py: 8,
        color: darkMode ? 'white' : 'black',
      }}
    >
      <Typography variant="h3" sx={{ mb: 2, textAlign: 'center' }}>
        Admin Dashboard
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 680, textAlign: 'center', mb: 4 }}>
        This is a placeholder admin page. Add your admin tools here, or protect this route
        with authentication if needed.
      </Typography>
      <Button
        variant="contained"
        color={darkMode ? 'secondary' : 'primary'}
        href="/"
        sx={{ textTransform: 'none' }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default Admin;

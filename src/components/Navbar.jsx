import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const pages = ['Home', 'About', 'Projects', 'Contact', 'Admin'];

export default function ResponsiveAppBar({ darkMode, setDarkMode }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigation = (sectionId) => {
    if (sectionId === 'Admin') {
      navigate('/admin');
      handleCloseNavMenu();
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 120);
    } else {
      scrollToSection(sectionId);
    }

    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        backgroundColor: darkMode ? 'rgba(20,20,20,0.95)' : 'rgba(255,255,255,0.95)',
        boxShadow: darkMode 
          ? '0 2px 12px rgba(0,0,0,0.3)' 
          : '0 2px 12px rgba(0,0,0,0.08)',
        minHeight: '100px',
        justifyContent: 'center',
        zIndex: 1100,
        transition: 'all 0.5s ease',
        borderBottom: darkMode ? '1px solid rgba(139, 92, 246, 0.2)' : '1px solid rgba(139, 92, 246, 0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
          }}
        >
          {/* Desktop Logo */}
          <Typography
            variant="h4"
            component="a"
            href="#"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: darkMode ? 'white' : 'black',
              textDecoration: 'none',
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            CHANDU
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton size="large" onClick={handleOpenNavMenu} sx={{ color: darkMode ? 'white' : 'black' }}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleNavigation(page)}>
                  <Typography textAlign="center" sx={{ color: darkMode ? 'white' : 'black', fontSize: '18px' }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={() => setDarkMode(!darkMode)}>
                <Typography textAlign="center" sx={{ color: darkMode ? 'white' : 'black', fontSize: '18px' }}>
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: darkMode ? 'white' : 'black',
              textDecoration: 'none',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.6rem',
              textAlign: 'center',
            }}
          >
            CHANDU
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavigation(page)}
                sx={{
                  color: darkMode ? 'white' : 'black',
                  textTransform: 'none',
                  fontSize: '18px',
                  fontWeight: 500,
                }}
              >
                {page}
              </Button>
            ))}

            {/* Dark Mode Button */}
            <IconButton onClick={() => setDarkMode(!darkMode)} sx={{ color: darkMode ? 'white' : 'black' }}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

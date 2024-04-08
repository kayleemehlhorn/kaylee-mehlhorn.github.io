import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email'; // Import EmailIcon
import { Link } from 'react-router-dom';

function KMNavbar() {
  const [hovered, setHovered] = useState(false);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#D3D3D3'}}>
      <Toolbar>
        {/* Home Button with Link */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          <Link 
            to="/" 
            style={{ textDecoration: 'none', fontFamily: 'monospace', color: hovered ? '#AF63FF' : '#000' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {hovered ? "Software Engineer" : "Kaylee Mehlhorn"}
          </Link>
        </Typography>
        
        {/* Email Icon */}
        <IconButton
          color="inherit"
          aria-label="email"
          component="a"
          href="mailto:mehlhorn17@gmail.com" 
          sx={{
            '&:hover': {
              color: '#ff5722' 
            },
          }}
        >
          <EmailIcon />
        </IconButton>
        {/* Social Icons */}
        <IconButton
          color="inherit"
          aria-label="instagram"
          component="a"
          href="https://www.instagram.com/kaylee_mehlhorn/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            '&:hover': {
              color: '#ee2a7b'
            },
          }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="linkedin"
          component="a"
          href="https://www.linkedin.com/in/kaylee-mehlhorn-4aa17595/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            '&:hover': {
              color: 'blue', 
            },
          }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="github"
          component="a"
          href="https://github.com/kayleemehlhorn"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            '&:hover': {
              color: '#24292e'
            },
          }}
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default KMNavbar;

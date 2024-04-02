import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AttachFileIcon from '@mui/icons-material/AttachFile'; // Changed import statement
import { Link } from 'react-router-dom'; // If using React Router

function KMNavbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#D3D3D3'}}>
      <Toolbar>
        {/* Home Button with Link */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1}} >
          <Link to="/" style={{ textDecoration: 'none', color: '#CBC3E3', fontFamily: 'monospace' }}>Kaylee Mehlhorn</Link>
        </Typography>
        
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
        {/* Cover Letter Icon */}
        <IconButton
          color="inherit"
          aria-label="cover-letter"
          component="a"
          href=""
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            '&:hover': {
              color: '#000000'
            },
          }}
        >
         <AttachFileIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default KMNavbar;

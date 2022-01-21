import { AppBar, List, ListItem, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'overline',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'black'
    }
}

function Header() {
  return (
      <AppBar position='static' sx={{ mb: 4 }}>
          <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Box>
              <Typography variant='h6' component={NavLink} to='/' sx={{color: 'inherit', textDecoration: 'none'}}>Duck Science</Typography>
              </Box>
              <List sx={{display: 'flex'}}>
                  
                  <ListItem
                    component={NavLink}
                    to='/add-duck'
                    key='/add-duck'
                    sx={navStyles}                   
                  >
                      Add Duck
                  </ListItem>
                 
                  <Box>
                  <ListItem
                    component={NavLink}
                    to='/login'
                    key='/login'
                    sx={navStyles}                   
                  >
                      Login
                  </ListItem>
                  </Box>
              </List>
          </Toolbar>
      </AppBar>
  );
}

export default Header;

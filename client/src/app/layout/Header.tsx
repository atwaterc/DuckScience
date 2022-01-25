import { LoadingButton } from '@mui/lab';
import { AppBar, Box, List, ListItem, TextField, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';

const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'overline',
    minWidth: '10vw',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'yellow'
    }
}
  
function Header() {
      // use navigate to push user to new location after successful login
    const nav = useNavigate()
    const {register, reset, handleSubmit, formState: {isSubmitting, errors, isValid}} = useForm({
        mode: 'all'
    })
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    async function submitForm(data: FieldValues) {
        try {
            await axios.post('http://localhost:5000/api/user/login', data)
            .then(res => localStorage.setItem('user', JSON.stringify(res.data)))
            .catch(err => console.log(err))
            .finally(() => {
                if (localStorage.getItem('user') !== null) {
                    nav('/dashboard/ducks')
                    setIsLoggedIn(true)
                    console.log(register)
                }
            })
        } catch (err) {
        console.log(err)
        }
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
        localStorage.removeItem('user')
        reset({name: '', password: ''})
    }

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
              </List>
            
              { isLoggedIn ? (
                <List sx={{display: 'flex'}}>  
                    <ListItem
                        component={NavLink}
                        to='/dashboard/ducks'
                        key='/dashboard/ducks'
                        sx={navStyles}                  
                    >
                        See Ducks
                    </ListItem>

                    <ListItem
                        component={NavLink}
                        to='/'
                        key='/logout'
                        sx={navStyles}
                        onClick={() => handleLogout()}                  
                    >
                        Logout
                    </ListItem>
                </List>
              ) : (
                <List sx={{display: 'flex'}}>  
                    <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            variant='filled'
                            size='small'
                            margin="dense"
                            id="username"
                            label="Username"
                            {...register('username', {required: true})}
                            error={!!errors.username}
                            helperText={errors?.username?.message}
                            autoComplete='off'
                            sx={{mr: 2, height: 10}}
                        />
                        <TextField
                            variant='filled'
                            size='small'
                            margin="dense"
                            label="Password"
                            type="password"
                            id="password"
                            {...register('password', {required: true})}
                            error={!!errors.password}
                            helperText={errors?.password?.message}
                            autoComplete='off'
                        />
                        <LoadingButton
                            disabled={!isValid}
                            loading={isSubmitting}
                            type="submit"
                            variant="contained"
                            sx={{mt: 1.5, ml: 1}}
                        >
                            Login
                        </LoadingButton>
                    </Box>
                </List>
              )}
          </Toolbar>
      </AppBar>
    );
}

export default Header;

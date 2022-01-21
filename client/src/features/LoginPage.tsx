import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';

function LoginPage() {

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };


  return (
    <Container component='main' sx={{mt: 8, display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Box
      onSubmit={handleSubmit}
      component='form'
      noValidate
      autoComplete='off'
    >
      <Typography variant='h5' sx={{textAlign: 'center'}}>
        Hello Duck Scientist! Please Sign In
      </Typography>
      <div>
        <TextField
          margin='normal'
          required
          id='username'
          name='username'
          label='Username'
          fullWidth
          autoFocus
        />
        <TextField
          margin='normal'
          required
          id='password'
          name='password'
          label='Password'
          type='password'
          fullWidth
        />
      </div>
      <Button type='submit' fullWidth variant='contained' sx={{mt: 3}}>Sign In</Button>
    </Box>
    </Container>
  );
}

export default LoginPage;

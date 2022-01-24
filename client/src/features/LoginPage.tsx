import { Box, Container, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  // use navigate to push user to new location after successful login
  const nav = useNavigate()
  const {register, handleSubmit, formState: {isSubmitting, errors, isValid}} = useForm({
    mode: 'all'
  })

  async function submitForm(data: FieldValues) {
    try {
          await axios.post('http://localhost:5000/api/user/login', data)
          .then(res => localStorage.setItem('user', JSON.stringify(res.data)))
          .catch(err => console.log(err))
          .finally(() => {
              if (localStorage.getItem('user') !== null) {
                console.log('notnull')
                nav('/dashboard/ducks')
              }
          })
    } catch (err) {
      console.log(err)
    }
  }

  return (
      <Container component={Paper} maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component="h1" variant="h5">
            Please Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              autoFocus
              {...register('username', {required: 'Username required'})}
              error={!!errors.username}
              helperText={errors?.username?.message}
              autoComplete='off'
            />
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              id="password"
              {...register('password', {required: 'Password required'})}
              error={!!errors.password}
              helperText={errors?.password?.message}
              autoComplete='off'
            />
            <LoadingButton
              disabled={!isValid}
              loading={isSubmitting}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </LoadingButton>
          </Box>
        </Box>
      </Container>
  );
}

export default LoginPage;

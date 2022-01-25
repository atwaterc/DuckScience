import { LoadingButton } from '@mui/lab';
import { Box, InputAdornment, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function AddDuckPage() {
  const {register, reset, handleSubmit, formState: {isSubmitting, errors, isValid}} = useForm({
        mode: 'all'
    })

    async function submitForm(data: FieldValues) {
        try {
            await axios.post('http://localhost:5000/api/ducks/add-duck', data)
            .catch(err => console.log(err))
            .finally(() => {
              toast.success('🦆 Successfully Added!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                });
                reset({timeFed:'', foodType: '', locationFed: '', qtyDucksFed: '', qtyFoodFed: ''})
            })
        } catch (err) {
        console.log(err)
        }
    }
  return (
    <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 1 }}>
        <TextField
            variant='outlined'
            size='small'
            margin="dense"
            {...register('timeFed', {required: true})}
            error={!!errors.timeFed}
            helperText={errors?.timeFed?.message}
            autoComplete='off'
            sx={{mr: 2}}
            type='time'
        />
        <TextField
            variant='outlined'
            size='small'
            margin="dense"
            label="Type of Food"
            {...register('foodType', {required: true})}
            error={!!errors.foodType}
            helperText={errors?.foodType?.message}
            autoComplete='off'
            sx={{mr: 2}}
        />
        <TextField
            variant='outlined'
            size='small'
            margin="dense"
            label="Location Fed"
            {...register('locationFed', {required: true})}
            error={!!errors.locationFed}
            helperText={errors?.locationFed?.message}
            autoComplete='off'
            sx={{mr: 2}}
        />
        <TextField
            variant='outlined'
            size='small'
            margin="dense"
            label="Qty of Ducks Fed"
            {...register('qtyDucksFed', {required: true})}
            error={!!errors.qtyDucksFed}
            helperText={errors?.qtyDucksFed?.message}
            autoComplete='off'
            sx={{mr: 2}}
        />
        <TextField
            variant='outlined'
            size='small'
            margin="dense"
            label="Qty of Food Fed"
            {...register('qtyFoodFed', {required: true})}
            error={!!errors.qtyFoodFed}
            helperText={errors?.qtyFoodFed?.message}
            autoComplete='off'
            sx={{mr: 2}}
            InputProps={{
              endAdornment: <InputAdornment position="end">oz</InputAdornment>
          }}
        />
        <LoadingButton
            disabled={!isValid}
            loading={isSubmitting}
            type="submit"
            variant="contained"
            sx={{textAlign: 'center'}}
        >
            Submit Duck
        </LoadingButton>
    </Box>
  )
}

export default AddDuckPage;

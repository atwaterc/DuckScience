import { LoadingButton } from '@mui/lab';
import { Box, Container, InputAdornment, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function AddDuckPage() {
    const {register, reset, handleSubmit, formState: {isSubmitting, errors, isValid}} = useForm({
        mode: 'all'
    })

    // submit form data of duck data to backend
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

    // keep updating duck facts every 7s
    useEffect(() => {
      const duckFactsArray = [
        {fact: 'Ducks are mostly aquatic birds living in both fresh water and sea water and found on every continent except for Antarctica.'},
        {fact: 'Wetlands, such as ponds, streams, lakes and lagoons, and woodland areas, such as swamp forests and stands of mangrove trees, are natural habitats for ducks.'},
        {fact: 'Ducks have been domesticated as pets and farm animals for more than 500 years, and all domestic ducks are descended from either the mallard or the Muscovy duck.'},
        {fact: 'Ducks feet has no nerves or blood vessels, meaning that their feet do not feel the cold! This enables ducks to swim in icy water, and walk in ice and snow.'},
        {fact: 'Ducks have three eyelids. '},
        {fact: 'Ducks are very social animals who feel most at ease when they’re in larger groups of other ducks.'},
        {fact: 'Ducks are omnivores.'},
      ]
      const interval = setInterval(() => {
        // randomize array item to display
        let fact = document.getElementById('duck-facts')
        let index = Math.floor(Math.random() * duckFactsArray.length)
        fact!.textContent = duckFactsArray[index].fact
      }, 7000)
      return () => clearInterval(interval);
    }, [])

  return (
    <Container>
      <Box display='inline' textAlign='center' >
        <Typography sx={{width: '100%'}} variant='h5'>Cool Duck Facts</Typography>
        <Typography id='duck-facts' sx={{width: '100%', fontStyle: 'italic', minHeight: 80}} variant='body1'>
          There are approximately 120 different species of ducks
        </Typography>
      </Box>
    <Box display='flex' alignItems='center' justifyContent='center' 
      component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 1 }}>
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
            sx={{width: '25%', margin: 'auto'}}
        >
            Submit Duck
        </LoadingButton>
    </Box>
    </Container>
  )
}

export default AddDuckPage;

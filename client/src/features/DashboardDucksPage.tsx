import React, { useEffect, useState } from 'react';
import { TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Table } from '@mui/material';
import axios from 'axios';
import Spinner from './common/Spinner';
import { Duck } from '../app/models/duck';

const rowStyle = {
    backgroundColor: 'white',
    '&:hover': {
        backgroundColor: '#add8e6 !important'
    }
}

const cellStyle = {
    color: 'black'
}

function DashboardDucksPage() {
  const [ducks, setDucks] = useState<Duck[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:5000/api/ducks')
    .then(res => setDucks(res.data))
    .catch(err => console.log(err))
    .finally(() => {
      setLoading(false)
    })
  }, [])

  if (loading) return (
        <Spinner />
    )

  return(
        <TableContainer component={Paper} sx={{ mt: 3, mb: 3 }}>
            <Table size='small' sx={{ minWidth: 700}}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Time Fed</TableCell>
                        <TableCell align="center">Type of Food</TableCell>
                        <TableCell align="center">Location</TableCell>
                        <TableCell align="center">Qty Ducks Fed</TableCell>
                        <TableCell align="center">Qty of Food</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {ducks && ducks.map((duck) => (
                    <TableRow key={duck.id} hover={true} sx={rowStyle}>
                        <TableCell key={duck.id + 'timeFed'} sx={cellStyle} align="center">{duck.timeFed.hours}:{duck.timeFed.minutes} AM</TableCell>
                        <TableCell key={duck.id + 'foodType'} sx={cellStyle} align="center">{duck.foodType}</TableCell>
                        <TableCell key={duck.id + 'locationFed'} sx={cellStyle} align="center">{duck.locationFed}</TableCell>
                        <TableCell key={duck.id + 'qtyDucksFed'} sx={cellStyle} align="center">{duck.qtyDucksFed}</TableCell>
                        <TableCell key={duck.id + 'qtyFoodFed'} sx={cellStyle} align="center">{duck.qtyFoodFed}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DashboardDucksPage;

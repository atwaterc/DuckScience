import { Box, CircularProgress } from '@mui/material';

export default function Spinner() {
    return (
        <Box sx={{alignItems:'center', display: 'flex', justifyContent: 'center' }}>
            <CircularProgress color="inherit" size={50} />
        </Box>
    )
}
import { Container, createTheme, ThemeProvider } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddDuckPage from '../../features/AddDuckPage';
import DashboardDucksPage from '../../features/DashboardDucksPage';
import HomePage from '../../features/HomePage';
import LoginPage from '../../features/LoginPage';
import './App.css';
import Header from './Header';

function App() {

  const theme = createTheme({
    palette: {
      mode: 'light'
    }
  })

  const [ducks, setDucks] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/ducks')
    .then(res => setDucks(res.data))
    .catch(err => console.log(err))
  },[])

  console.log(ducks)
  
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/add-duck' element={<AddDuckPage />} />
            <Route path='/dashboard/ducks' element={<DashboardDucksPage />} />
            <Route path='/' element={<HomePage />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </Router>

  );
}

export default App;

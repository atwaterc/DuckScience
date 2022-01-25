import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddDuckPage from '../../features/AddDuckPage';
import DashboardDucksPage from '../../features/DashboardDucksPage';
import HomePage from '../../features/HomePage';
import Header from './Header';

function App() {

  // create theme for material
  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  })
  
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ToastContainer 
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover/>
          <CssBaseline />
          <Header />
          <Container>
            <Routes>
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

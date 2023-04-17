import React from 'react'
import { Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import { Home } from '@mui/icons-material';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Homepg from './pages/Homepg';
import Navbar from './components/Navbar';

import Footer from './components/Footer';

const App = () => {
  return (
    <Box with = "40px" sx={{width : {xl:'1488px'}}} m= "auto">
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Homepg/>}/>
        <Route path = "/exercise/:id" element ={<ExerciseDetail />}/>
      </Routes>
      <Footer/>
    </Box> 
 )
}

export default App
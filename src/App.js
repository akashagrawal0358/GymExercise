import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import  ExercisesDetail from './pages/ExercisesDetail' ;
import Home from './pages/Home' ;
import Navbar from './components/Navbar' ;
import Footer from './components/Footer' ;
import {Routes , Route} from 'react-router-dom' ;


function App() {
  return (
   <Box width ="400px"  sx={{width:{xl:'1488px'}}} m="auto" >
    <Navbar/> 
    <Routes>
            <Route  path ="/" element ={<Home/>} />
            <Route  path ="/exercises/:id" element ={<ExercisesDetail/>} />
    </Routes>
    <Footer/>
   </Box> 
    


  ) 
}
export default App;

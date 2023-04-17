import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';
import { BorderBottom } from '@mui/icons-material';
const Navbar = () => {
  return (

    <Stack 
      direction = "row"
      justifyContent= "space-around" sx ={{ gap : {sm: '122px' , xs:'40px' } , mt:{ sm :'32px' ,xs : '20px'}, justifyContent :'none'}}>

      <Link to="/">
        <img src={Logo} alt="logo" style={{ width :'70px', height :'70px',margin :'0 20px'}} />
      </Link>
      <Stack
      
        direction="row"
        gap = "40px"
        fontSize = "24px"
        alignItems = "flex-end"
        >
        <Link to="/" style={{ textDecoration : 'none' , color :"#3A1212" ,borderBottom : '3px solid #2a314e'}} px = "20px">
        Home
        </Link>
        <a href="#exercises" style= {{textDecoration:'none', color : '#3A121'}}>Exerciser</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
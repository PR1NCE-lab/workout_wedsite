import React from 'react';
import {Box , Stack , Typography ,Button } from '@mui/material';
import FirstBannerImage from '../assets/images/sd.png';
import { Padding } from '@mui/icons-material';

const FirstBanner = () => {
  return (
    <Box sx ={{
        mt : {lg : '212px' , xs : '70px'},
        ml : { sm : '50px'}
    }} position = " relative" p= " 20px" >
        <Typography color = '#56b2c3'
        fontWeight="600" fontSize= '24px'>
            Fitness club
        </Typography>
        <Typography color = {'#77ad95'}fontWeight={700}
        sx = {{ fontSize : {lg:'44px' , xs : '40'}

        }}
        mb ="23px" mt ="30px"
        >
            You are only one workout  <br/>  away from a good mood.
        </Typography>
        <Typography fontSize = "22px" linehight = '35px' mb ={4}>
         Check out the most effective exercise    
        </Typography>
        <Button variant = "contained"
        color ="error" href='#exercises'
          sx = {{ 
            backgroundColor : '#2a314e',
            padding :'10px'
            }}>
          Explore Exercises
        </Button>
        <Typography 
        fontWeight={600}
        color ='#2a314e'
        sx= {{
          opacity: 0.1,
          display:{ lg : 'block' , xs:'none'}

        }}
        fontSize="200px"
        >
          Exercises
        </Typography>
        <img src ={FirstBannerImage} alt ="banner"
          className="First-banner-img" />
    </Box>
  )
}

export default FirstBanner
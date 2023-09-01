import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/MF.png';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg:'212px', xs:'70px' },
      ml: { sm:'50px' }
    }} position="relative" p="20px">
      <Typography color= "#FF2625" fontWeight="600" fontSize="26px">
        Muscle Factory
      </Typography>
      <Typography fontWeight={700} sx={{fontSize: { lg:'44px', xs:'40px' }}}>
        SWEAT, GAIN, EAT <br /> and REPEAT
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Checkout your required Exercises and start your Gains.
      </Typography>
      <Button variant='contained' color='secondary' href="#exercises" sx={{padding:'10px'}}> Explore Exercises </Button>
      <Typography fontWeight={600} color="Black" fontSize={175} sx={{opacity: 0.13, display: {lg:'block', xs:'none'}}} textAlign="center"> PAIN IS GAIN </Typography>
      <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner
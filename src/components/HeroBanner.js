import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo1.png';

import HeroBannerImage from '../assets/images/hero2.jpg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '100px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px" pt="0px">
    {/* <Typography color="#FF2625" fontWeight="600" fontSize="20px" fontFamily='creepster' letterSpacing="0.2em"><span style={{fontSize:"50px", color:"rgb(255, 196, 0)",fontWeight:"400"}}>F</span>ITFLEX</Typography> */}
    <Link> <img style={{borderRadius:"48%"}} src={Logo} alt="Logo" /></Link>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Energetic, Unlease <br />
      And Triumph
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography  fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      RUNNING
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
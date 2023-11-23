import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <p>Copyright © Shivanshu Tripathi & Yash Verma </p>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">This Project is done during  MERN Fullstack Internship by <a style={{textDecoration:"none",color:"red"}} href="https://codemithra.com/">Codemitra</a> for Final Project Submission</Typography>
  </Box>
);

export default Footer;
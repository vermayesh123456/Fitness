import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';



const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "10px" },
      justifyContent: "none",
    }}
    px="20px"
  >
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/app/home"
        style={{
          textDecoration: "none",
          color: "#3A1212",
          borderBottom: "3px solid #FF2625",
        }}
      >
        Home
      </Link>
      <Link to="/app/list" style={{ textDecoration: "none", color: "#3A1212" }}>
        Exercises
      </Link>
      <Link to="/app/bmi" style={{ textDecoration: "none", color: "#3A1212" }}>
        BMI
      </Link>
      <Link to="/app/create" style={{ textDecoration: "none", color: "#3A1212" }}>
        Exercise Log
      </Link>
      <Link to="/app/user" style={{ textDecoration: "none", color: "#3A1212" }}>
        Create User
      </Link>
      <Link to="/app/food" style={{ textDecoration: "none", color: "#3A1212" }}>
        Food
      </Link>
      <Link to="/fitness" className='btn btn-danger'>
        Logout
      </Link>
    </Stack>
  </Stack>
);

export default Navbar;
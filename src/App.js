import './App.css';
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import ExerciseList from "./components/exerciselist.comp";
import EditExercise from "./components/editexercise.comp";
import CreateExercise from "./components/createexercise.comp";
import CreateUser from "./components/createuser.comp";
import BMICalc from './pages/BMICalc';
import Food from './pages/Food';


function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/home" exact element={<Home/>} />
        <Route path="/list" element={<ExerciseList/>} />
        <Route path="/edit/:id" element={<EditExercise/>} />
        <Route path="/create" element={<CreateExercise/>} />
        <Route path="/user" element={<CreateUser/>} />
        <Route path="/bmi" element={<BMICalc/>} />
        <Route path="/food" element={<Food/>} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;

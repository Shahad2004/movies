import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../App.css'


import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MoviesDetails from '../pages/MoviesDetails';
function NavBar() {
    return (
        <Router>
            <div style={{ padding: 0, margin: 0 }}> {/* Add this style */}
                <AppBar position="static" sx={{ margin: 0 }}> {/* Add margin: 0 here */}
                    <Toolbar sx={{ 
                        justifyContent: "space-between", 
                        width: "100%",
                        padding: '0 16px' /* Add some horizontal padding */
                    }}>
                        <Typography variant="h6" component="div">
                            My Movie Website
                        </Typography>
                        <Box>
                            <Button color="inherit" component={Link} to="/">Home</Button>
                            <Button color="inherit" component={Link} to="/movies">Movies</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
                
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/movies' element={<Movies />} />
                    <Route path='/movies/:id' element ={<MoviesDetails/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default NavBar;

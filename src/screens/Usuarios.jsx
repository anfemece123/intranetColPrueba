import React from 'react'
import Box from '@mui/material/Box';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const Usuarios = () => {
  return (
    <>
    <NavBar/>
        <Box sx={{ display: 'flex' }}>
            <SideBar/>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>USUARIOS</h1> 
                </Box>
        </Box>
    </>
  )
}

export default Usuarios
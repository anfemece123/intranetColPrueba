import React from 'react'
import MiniDrawer from '../components/SideBar'
import Box from '@mui/material/Box';
import NavBar from '../components/NavBar';
import { useSelector } from 'react-redux';

const Home = () => {

  const buttonState = useSelector((state) => state.button);

  console.log(buttonState)


  return (
    <>
    <NavBar/>
        <Box sx={{ display: 'flex' }}>
            <MiniDrawer/>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Home</h1> 
                </Box>
        </Box>
    </>
  )
}

export default Home
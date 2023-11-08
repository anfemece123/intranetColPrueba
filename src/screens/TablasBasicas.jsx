import React from 'react'
import MiniDrawer from '../components/SideBar'
import Box from '@mui/material/Box';

const TablasBasicas = () => {
  return (
    <>
        <Box sx={{ display: 'flex' }}>
            <MiniDrawer/>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Tablas Basicas</h1>
                </Box>
        </Box>
    </>
  )
}

export default TablasBasicas
import React from 'react'
import Box from '@mui/material/Box';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { pink } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';

const tableCell = {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    fontSize: 14,
    align:"center"
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id, Nombre, Apellido, Email, Telefono, FechaIngreso, FechaNacimiento, Privilegio, Comision, Estado, Opcion) {
  return { id, Nombre, Apellido, Email, Telefono, FechaIngreso, FechaNacimiento, Privilegio, Comision, Estado, Opcion };
}

const rows = [

  createData(72, 'Cristian Nodal', 'Aparicio Santacruz Rodriguez', '12344@gmail.com', 123455, 12031999, 12031999, 'super usuario', 1.00, 'ACTIVO', 'Editar'),
  createData(72, 'Cristian', 'Aparicio', '12344@gmail.com', 123455, 12031999, 12031999, 'super usuario', 1.00, 'ACTIVO', 'Editar'),
  createData(72, 'Cristian', 'Aparicio', '12344@gmail.com', 123455, 12031999, 12031999, 'super usuario', 1.00, 'ACTIVO', 'Editar'),
  createData(72, 'Cristian', 'Aparicio', '12344@gmail.com', 123455, 12031999, 12031999, 'super usuario', 1.00, 'ACTIVO', 'Editar'),
  createData(72, 'Cristian', 'Aparicio', '12344@gmail.com', 123455, 12031999, 12031999, 'super usuario', 1.00, 'ACTIVO', 'Editar'),
  createData(72, 'Cristian', 'Aparicio', '12344@gmail.com', 123455, 12031999, 12031999, 'super usuario', 1.00, 'ACTIVO', 'Editar'),
  createData(72, 'Cristian', 'Aparicio', '12344@gmail.com', 123455, 12031999, 12031999, 'super usuario', 1.00, 'ACTIVO', 'Editar'),
  createData(72, 'Cristian', 'Aparicio', '12344@gmail.com', 123455, 12031999, 12031999, 'super usuario', 1.00, 'ACTIVO', 'Editar'),
  createData(72, 'Cristian', 'Aparicio', '12344@gmail.com', 123455, 12031999, 12031999, 'super usuario', 1.00, 'ACTIVO', 'Editar'),
  createData(72, 'Cristian', 'Aparicio', '12344@gmail.com', 123455, 12031999, 12031999, 'super usuario', 1.00, 'ACTIVO', 'Editar'),
  createData(72, 'Cristian', 'Aparicio', '12344@gmail.com', 123455, 12031999, 12031999, 'super usuario', 1.00, 'ACTIVO', 'Editar'),
  createData(72, 'Cristian', 'Aparicio', '12344@gmail.com', 123455, 12031999, 12031999, 'super usuario', 1.00, 'ACTIVO', 'Editar'),
];


const tableContainerStyle = {
  maxHeight: '600px', // Altura máxima del contenedor
  maxWidth: '100%',
  overflowY: 'auto', // Habilitar desplazamiento vertical
};

const iconContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Usuarios = () => {

  return (
    <>
      <NavBar  />
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 1, marginTop: 11}}>
          {/* <h1>USUARIOS</h1> */}
          <TableContainer component={Paper} style={tableContainerStyle} >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead >
                <TableRow  >
                  <TableCell style={tableCell} sx={{backgroundColor: 'primario.naranjaTres'}}  >id</TableCell>
                  <TableCell style={tableCell} sx={{backgroundColor: 'primario.naranjaTres'}} >Nombre</TableCell>
                  <TableCell style={tableCell} sx={{backgroundColor: 'primario.naranjaTres'}} >Apellido</TableCell>
                  <TableCell style={tableCell} sx={{backgroundColor: 'primario.naranjaTres'}} >Email</TableCell>
                  <TableCell style={tableCell} sx={{backgroundColor: 'primario.naranjaTres'}} >Telefono</TableCell>
                  <TableCell style={tableCell} sx={{backgroundColor: 'primario.naranjaTres'}} >Fecha Ingreso</TableCell>
                  <TableCell style={tableCell} sx={{backgroundColor: 'primario.naranjaTres'}} >Fecha Nacimiento</TableCell>
                  <TableCell style={tableCell} sx={{backgroundColor: 'primario.naranjaTres'}}>Privilegio</TableCell>
                  <TableCell style={tableCell} sx={{backgroundColor: 'primario.naranjaTres'}}>Comisión</TableCell>
                  <TableCell style={tableCell} sx={{backgroundColor: 'primario.naranjaTres'}}>Estado</TableCell>
                  <TableCell style={tableCell} sx={{backgroundColor: 'primario.naranjaTres'}}>Opción</TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                {rows.map((row) => (
                  <StyledTableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.Nombre}</TableCell>
                    <TableCell align="right">{row.Apellido}</TableCell>
                    <TableCell align="right">{row.Email}</TableCell>
                    <TableCell align="right">{row.Telefono}</TableCell>
                    <TableCell align="right">{row.FechaIngreso}</TableCell>
                    <TableCell align="right">{row.FechaNacimiento}</TableCell>
                    <TableCell align="right">{row.Privilegio}</TableCell>
                    <TableCell align="right">{row.Comision}</TableCell>
                    <TableCell align="right">{row.Estado}</TableCell>
                    <TableCell>
                      <div style={iconContainerStyle}>
                        <Tooltip title="Editar" placement="top-end">
                          <Button variant='text' size='medium' color="primary">
                            <AutoFixHighOutlinedIcon sx={{ color: 'negro.main'}} />
                          </Button>
                        </Tooltip>
                        <Tooltip title="Eliminar" placement="top">
                          <Button variant='text' size='medium'>
                            <DeleteOutlineOutlinedIcon sx={{ color: 'error.main'}} />
                          </Button>
                        </Tooltip>
                      </div>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  )
}


export default Usuarios
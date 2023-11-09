import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const paletaColores = createTheme({
    palette: {
        primario:{
            naranjaUno: '#DB5717',
            naranjaDos: '#ED7439',
            naranjaTres: '#ED8F62'        
        },
        secundario:{
            grisUno: '#a0a0a0',
            grisDos: '#d2d2d2',
            grisTres: '#e9e9e9',
            grisCuatro: '#f5f5f5',
            grisCinco: '#fcfcfc'
        },
        error: {
            main: red.A400
        },
        negro: {
            main: '#000000'
        }
    }
})
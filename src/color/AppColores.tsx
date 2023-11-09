import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { paletaColores } from './PaletaColores';
import { CssBaseline } from '@mui/material';



export const AppColores = ({children}) => {
  return (
    <ThemeProvider theme={paletaColores}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  );
}
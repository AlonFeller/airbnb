
  
import * as React from 'react';
import { useEffect, useState } from "react"
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material';

export const MyDatePickerOrder = ({handleCheck, label} ) => {
  const [value, setValue] = React.useState(null);

  useEffect(() => {
    handleCheck(value)
  },[value])

  
  const theme = createTheme({
    palette: {
        primary: {
            main: "#3d3d3d",
        },
        secondary: {
            main: "#717171",
        },
    },
});

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
      <DatePicker
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        />
        </ThemeProvider>
    </LocalizationProvider>
  );
}



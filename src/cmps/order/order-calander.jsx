import * as React from 'react'
import {useEffect} from 'react'
import TextField from '@mui/material/TextField'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import Box from '@mui/material/Box'

export default function BasicDateRangePicker({ onGetOrderDates }) {
  const [value, setValue] = React.useState([null, null]);

  useEffect(() => {
    if (value.length !== 2 || !value[1]) return
    onGetOrderDates(value)
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          // onGetOrderDates(newValue)
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 0 }}></Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}

import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Unstable_DateField as DateField } from '@mui/x-date-pickers/DateField';
import { Unstable_NextDatePicker as NextDatePicker } from '@mui/x-date-pickers/NextDatePicker';
import Stack from '@mui/material/Stack';

export default function CustomFieldFormat() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DateField
          label="Date Field"
          format="MM - DD - YYYY"
          defaultValue={dayjs('2022-04-07')}
        />
        <NextDatePicker
          label="Date Picker"
          format="YYYY/MM/DD"
          defaultValue={dayjs('2022-04-07')}
        />
      </Stack>
    </LocalizationProvider>
  );
}

import * as React from 'react';
import { orange } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

function OrangeCheckboxes({}) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div>
      <Checkbox
        {...label}
        sx={{
          color: 'grey',
          '&.Mui-checked': {
            color: orange[700],
          },
        }} />
    </div>
  );
}
function PinkCheckboxes() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div>
      <Checkbox
        {...label}
        sx={{
          color: 'grey',
          '&.Mui-checked': {
            color: pink[700],
          },
        }} />
    </div>
  );
}
function GreenCheckboxes() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div>
      <Checkbox {...label} color="success" />
    </div>
  );
}

export {OrangeCheckboxes, PinkCheckboxes, GreenCheckboxes}

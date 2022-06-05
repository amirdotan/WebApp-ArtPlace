import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function BasicChips() {
  return (
<Stack direction="row" spacing={3} sx={{align: 'center'}}>
  <Chip label="photographer" color="secondary" />
  <Chip label="animator" color="success" />
  <Chip label="Photoshop" color="warning" />
</Stack>
  );
}

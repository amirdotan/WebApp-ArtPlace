import * as React from 'react';
import Alert from '@mui/material/Alert';


export default function BasicAlerts({email, user_name}) {
  return (
      <Alert variant="filled" severity="success">
        This is a success alert — check it out!
      </Alert>
  );
}

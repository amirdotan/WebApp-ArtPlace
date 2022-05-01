import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddLinkIcon from '@mui/icons-material/AddLink';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// This is the Speed dial component, the floating action button that adds posts
// source: https://mui.com/material-ui/react-speed-dial/

const actions = [
//   { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <AddPhotoAlternateIcon />, name: 'Add Photo', link: '/addpost' },
  { icon: <AddLinkIcon />, name: 'Add Link', link: '/home'},
  { icon: <ShareIcon />, name: 'Tell a friend!', link: '/home' },
];

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#679E84',
     }
    }
  });


export default function OpenIconSpeedDial() {
  return (
    <ThemeProvider theme={theme}>
    <SpeedDial
    ariaLabel="SpeedDial openIcon example"
    sx={{ position: 'absolute', bottom : 65, right: 16 }} 
    icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
    {actions.map((action) => (
        <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
        href={action.link}
        />
    ))}
    </SpeedDial>
    </ThemeProvider>
  );
}

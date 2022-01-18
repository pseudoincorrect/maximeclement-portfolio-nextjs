import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import AppBottomBar from './app-bottom-bar';
import AppDrawer from './app-drawer';
import AppDrawerItems from './app-drawer-items';
import AppTopBar from './app-top-bar';

interface MainLayoutProps {
  children?: React.ReactNode;
}
const sideWidth = 200;

export default function MainLayout(props: MainLayoutProps) {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <AppTopBar position='absolute' sideWidth={sideWidth} open={open}>
        <Toolbar sx={{ pr: '24px' }}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component='h1'
            variant='h4'
            color='inherit'
            noWrap
            sx={{ flexGrow: 1, padding: '1rem 0' }}
          >
            Maxime Clement IoT
          </Typography>
        </Toolbar>
      </AppTopBar>
      <AppDrawer sideWidth={sideWidth} open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <AppDrawerItems />
      </AppDrawer>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'hidden',
          pt: '5rem',
        }}
      >
        {props.children}
        <AppBottomBar />
      </Box>
    </Box>
  );
}

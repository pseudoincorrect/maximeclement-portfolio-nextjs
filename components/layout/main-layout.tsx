import Box from '@mui/material/Box';
import { useState } from 'react';

import AppBottomBar from './app-bottom-bar';
import AppDrawer from './app-drawer';
import AppTopBar from './app-top-bar';

interface MainLayoutProps {
  children?: React.ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box
      style={{
        display: 'flex',
        margin: '0',
        padding: '0',
      }}>
      <AppTopBar drawerToggle={toggleDrawer} />
      <AppDrawer open={open} drawerToggle={toggleDrawer}></AppDrawer>
      <Box
        component='main'
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          margin: '0',
          padding: '0',
          mt: '3rem',
          pt: '2rem',
          width: '100%',
        }}>
        {props.children}
        <AppBottomBar />
      </Box>
    </Box>
  );
}

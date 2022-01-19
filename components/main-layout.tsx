import { Container, CssBaseline, Toolbar } from '@mui/material';
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
    <Container sx={{ display: 'flex' }}>
      <AppTopBar drawerToggle={toggleDrawer} title={'IoT Engineer'} />
      <AppDrawer open={open} drawerToggle={toggleDrawer}></AppDrawer>
      <Container
        component='main'
        sx={{
          mt: '3rem',
          pt: '2rem',
        }}
      >
        {props.children}
        {/* <AppBottomBar /> */}
      </Container>
    </Container>
  );
}

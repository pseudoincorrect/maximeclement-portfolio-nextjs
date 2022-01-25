import { Box } from '@mui/material';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { Fragment, useState } from 'react';

import AppDrawerItems from './app-drawer-items';

// TODO : click close the drawer
function DrawerContent(props: { clicked: () => void }) {
  const { clicked } = props;
  return (
    <Box>
      <Toolbar
        sx={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      />
      <AppDrawerItems clicked={clicked} />
    </Box>
  );
}

interface AppDrawerProps extends DrawerProps {
  open: boolean;
  drawerToggle: () => void;
}

function AppDrawer(props: AppDrawerProps) {
  const { open, drawerToggle } = props;
  const drawerWidth = '13rem';

  return (
    <Box
      component='nav'
      sx={{ width: { md: drawerWidth }, flexShrink: { sm: 1, md: 0 } }}
      aria-label='mailbox folders'>
      <Drawer
        variant='temporary'
        open={open}
        onClose={drawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}>
        <DrawerContent clicked={drawerToggle} />
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open>
        <DrawerContent clicked={() => {}} />
      </Drawer>
    </Box>
  );
}

export default AppDrawer;

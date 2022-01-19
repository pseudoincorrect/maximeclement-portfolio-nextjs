import { Box } from '@mui/material';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { Fragment, useState } from 'react';

import AppDrawerItems from './app-drawer-items';

const drawerContent = (
  <div>
    <Toolbar
      sx={{
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1],
      }}
    />
    <AppDrawerItems />
  </div>
);

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
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label='mailbox folders'
    >
      <Drawer
        variant='temporary'
        open={open}
        onClose={drawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}

export default AppDrawer;

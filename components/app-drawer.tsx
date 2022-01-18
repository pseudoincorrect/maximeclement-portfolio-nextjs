import Drawer, { DrawerProps } from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';

const drawerWidth: number = 240;
const ENTERING = 'entering';
const LEAVING = 'leaving';

function appDrawerTransition(theme: any, entering: string) {
  return theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration:
      entering == ENTERING
        ? theme.transitions.duration.enteringScreen
        : theme.transitions.duration.leavingScreen,
  });
}

interface AppDrawerProps extends DrawerProps {
  open: boolean;
}

function AppDrawer(props: AppDrawerProps) {
  const theme = useTheme();

  const styleOpen: any = {
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
    },
  };

  const styleClosed: any = {
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
  };

  const { children, open } = props;
  return (
    <Drawer sx={open ? styleOpen : styleClosed} variant='permanent' open={open}>
      {children}
    </Drawer>
  );
}

export default AppDrawer;

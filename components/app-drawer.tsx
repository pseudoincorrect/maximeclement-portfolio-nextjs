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
    width: drawerWidth,
    flexShrink: 0,
    transition: appDrawerTransition(theme, LEAVING),
    '& .MuiDrawer-paper': {
      width: drawerWidth,
    },
  };

  const styleClosed: any = {
    ...styleOpen,
    overflowX: 'hidden',
    transition: appDrawerTransition(theme, LEAVING),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  };

  const { children, open } = props;
  return (
    <Drawer
      sx={open ? styleOpen : styleClosed}
      variant='persistent'
      anchor='left'
      open={open}
    >
      {children}
    </Drawer>
  );
}

export default AppDrawer;

import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

const drawerWidth: number = 240;

const ENTERING = 'entering';
const LEAVING = 'leaving';

interface DrawerProps extends MuiDrawerProps {
  open?: boolean;
}

function appDrawerTransition(theme: any, entering: string) {
  return theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration:
      entering == ENTERING
        ? theme.transitions.duration.enteringScreen
        : theme.transitions.duration.leavingScreen,
  });
}

function themeOnOpen(props: any) {
  const { theme, open } = props;
  return {
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: appDrawerTransition(theme, ENTERING),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: appDrawerTransition(theme, LEAVING),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  };
}

const AppDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})<MuiDrawerProps>(themeOnOpen);

export default AppDrawer;

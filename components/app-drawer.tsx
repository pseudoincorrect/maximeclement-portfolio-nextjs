import Drawer, { DrawerProps } from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';

const drawerWidth: number = 240;

const ENTERING = 'entering';
const LEAVING = 'leaving';

// interface DrawerProps extends MuiDrawerProps {
//   open?: boolean;
// }

function appDrawerTransition(theme: any, entering: string) {
  return theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration:
      entering == ENTERING
        ? theme.transitions.duration.enteringScreen
        : theme.transitions.duration.leavingScreen,
  });
}

// function themeOnOpen(props: any) {
//   const { theme, open } = props;
//   return {
//     '& .MuiDrawer-paper': {
//       position: 'relative',
//       whiteSpace: 'nowrap',
//       width: drawerWidth,
//       transition: appDrawerTransition(theme, ENTERING),
//       boxSizing: 'border-box',
//       boxShadow:
//         '0 6px 20px 0 rgba(0, 0, 0, 0.3), 0 8px 30px 0 rgba(0, 0, 0, 0.29);',
//       ...(!open && {
//         overflowX: 'hidden',
//         transition: appDrawerTransition(theme, LEAVING),
//         width: theme.spacing(7),
//         [theme.breakpoints.up('sm')]: {
//           width: theme.spacing(9),
//         },
//       }),
//     },
//   };
// }

// const AppDrawerOld = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })<MuiDrawerProps>(th emeOnOpen);

interface AppDrawerProps extends DrawerProps {
  open: boolean;
}

function AppDrawer(props: AppDrawerProps) {
  const theme = useTheme();

  const styleOpen: any = {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      transition: appDrawerTransition(theme, ENTERING),
      width: drawerWidth,
      boxSizing: 'border-box',
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

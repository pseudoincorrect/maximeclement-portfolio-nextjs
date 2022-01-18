import Drawer, { DrawerProps } from '@mui/material/Drawer';
import { SxProps, useTheme } from '@mui/material/styles';

const ENTERING = 'entering';
const LEAVING = 'leaving';

interface AppDrawerProps extends DrawerProps {
  open: boolean;
  sideWidth: number;
}

function AppDrawer(props: AppDrawerProps) {
  const theme = useTheme();
  const { children, open, sideWidth } = props;

  function openCloseTransition(entering: string) {
    return theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration:
        entering == ENTERING
          ? theme.transitions.duration.enteringScreen
          : theme.transitions.duration.leavingScreen,
    });
  }

  const styleCommon: SxProps = {
    position: 'relative',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    boxShadow:
      '0 6px 20px 0 rgba(0, 0, 0, 0.3), 0 8px 30px 0 rgba(0, 0, 0, 0.29);',
  };

  const styleOpen: SxProps = {
    '& .MuiDrawer-paper': {
      ...styleCommon,
      width: sideWidth,
      transition: openCloseTransition(ENTERING),
    },
  };

  const styleClosed: SxProps = {
    '& .MuiDrawer-paper': {
      ...styleCommon,
      width: theme.spacing(7),
      transition: openCloseTransition(LEAVING),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
  };

  return (
    <Drawer sx={open ? styleOpen : styleClosed} variant='permanent' open={open}>
      {children}
    </Drawer>
  );
}

export default AppDrawer;

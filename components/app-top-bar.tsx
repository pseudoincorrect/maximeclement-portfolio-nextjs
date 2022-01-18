import AppBar, { AppBarProps } from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';

const drawerWidth: number = 240;

const ENTERING = 'entering';
const LEAVING = 'leaving';

function appBarTransition(theme: any, entering: string) {
  return theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration:
      entering == ENTERING
        ? theme.transitions.duration.enteringScreen
        : theme.transitions.duration.leavingScreen,
  });
}

interface AppTopBarProps extends AppBarProps {
  open: boolean;
}

function AppTopBar(props: AppTopBarProps) {
  const theme = useTheme();
  const { children, open } = props;

  const styleClosed: any = {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow:
      '0 6px 12px 0 rgba(0, 0, 0, 0.3), 0 8px 20px 0 rgba(0, 0, 0, 0.29);',
    transition: appBarTransition(theme, ENTERING),
  };

  const styleOpen: any = {
    ...styleClosed,
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: appBarTransition(theme, LEAVING),
  };

  return <AppBar sx={open ? styleOpen : styleClosed}>{children}</AppBar>;
}

export default AppTopBar;

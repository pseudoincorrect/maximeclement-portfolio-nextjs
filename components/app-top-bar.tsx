import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

const drawerWidth: number = 240;

const ENTERING = 'entering';
const LEAVING = 'leaving';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

function appBarTransition(theme: any, entering: string) {
  return theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration:
      entering == ENTERING
        ? theme.transitions.duration.enteringScreen
        : theme.transitions.duration.leavingScreen,
  });
}

function appBarThemeOnOpen(props: any) {
  const { theme, open } = props;
  return {
    zIndex: theme.zIndex.drawer + 1,
    transition: appBarTransition(theme, ENTERING),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: appBarTransition(theme, LEAVING),
    }),
  };
}

const AppTopBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(appBarThemeOnOpen);

export default AppTopBar;

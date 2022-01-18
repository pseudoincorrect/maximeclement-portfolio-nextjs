import AppBar, { AppBarProps } from '@mui/material/AppBar';
import { SxProps, useTheme } from '@mui/material/styles';

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
  sideWidth: number;
}

function AppTopBar(props: AppTopBarProps) {
  const theme = useTheme();
  const { children, open, sideWidth } = props;

  const styleClosed: SxProps = {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow:
      '0 6px 12px 0 rgba(0, 0, 0, 0.3), 0 8px 20px 0 rgba(0, 0, 0, 0.29);',
    transition: appBarTransition(theme, LEAVING),
  };

  const styleOpen: SxProps = {
    ...styleClosed,
    marginLeft: sideWidth,
    width: `calc(100% - ${sideWidth}px)`,
    transition: appBarTransition(theme, ENTERING),
  };

  return <AppBar sx={open ? styleOpen : styleClosed}>{children}</AppBar>;
}

export default AppTopBar;

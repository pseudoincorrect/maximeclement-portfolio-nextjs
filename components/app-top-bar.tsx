import MenuIcon from '@mui/icons-material/Menu';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { SxProps, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface AppTopBarProps extends AppBarProps {
  title: string;
  drawerToggle: () => void;
}

function AppTopBar(props: AppTopBarProps) {
  const theme = useTheme();
  const { drawerToggle, title } = props;

  const style: SxProps = {
    zIndex: theme.zIndex.drawer + 1,
    height: '5rem',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-start',
    },
    boxShadow:
      '0 6px 12px 0 rgba(0, 0, 0, 0.3), 0 8px 20px 0 rgba(0, 0, 0, 0.29);',
  };

  return (
    <AppBar position='fixed' sx={style}>
      <Toolbar sx={{ pr: '24px' }}>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={drawerToggle}
          sx={{
            marginRight: '36px',
            display: { xs: 'block', sm: 'none' },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component='h1'
          variant='h4'
          color='inherit'
          noWrap
          sx={{ flexGrow: 1, padding: '1rem 0' }}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppTopBar;

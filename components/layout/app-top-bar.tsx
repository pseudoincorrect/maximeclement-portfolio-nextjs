import MenuIcon from '@mui/icons-material/Menu';
import { Box, styled } from '@mui/material';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { SxProps, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

interface AppTopBarProps extends AppBarProps {
  drawerToggle: () => void;
}

const StyledIconBox = styled(Box)(({ theme }) => ({
  marginRight: '2rem',
  position: 'relative',
  width: '4rem',
  height: '4rem',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    marginRight: '2rem',
    display: 'none',
    width: '3rem',
    height: '3rem',
  },
}));

function TitleIcon() {
  return (
    <StyledIconBox>
      <Image
        alt='iot cloud'
        priority={false}
        src='/favicon.ico'
        layout='fill'
        objectFit='cover'
        quality={100}
      />
    </StyledIconBox>
  );
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  overflow: 'hidden',
  height: '5rem',
  alignItems: 'center',
  paddingLeft: '13rem',
  backgroundColor: 'rgba(0,0,0,0.5)',
  backdropFilter: 'blur(8px)',

  [theme.breakpoints.down('md')]: {
    paddingLeft: '1rem',
    height: '4rem',
  },
  boxShadow:
    '0 6px 12px 0 rgba(0, 0, 0, 0.3), 0 8px 20px 0 rgba(0, 0, 0, 0.29);',
}));

function AppTopBar(props: AppTopBarProps) {
  const { drawerToggle } = props;

  return (
    <StyledAppBar position='fixed'>
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={drawerToggle}
          sx={{
            position: 'fixed',
            left: '2rem',
            marginTop: '10px',
            marginRight: '2rem',
            display: { xs: 'block', sm: 'block', md: 'none' },
          }}>
          <MenuIcon />
        </IconButton>
        <TitleIcon />
        <Typography
          component='h1'
          variant='h4'
          color='inherit'
          noWrap
          sx={{ flexGrow: 1, padding: '1rem 0' }}>
          IoT Engineer
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
}

export default AppTopBar;

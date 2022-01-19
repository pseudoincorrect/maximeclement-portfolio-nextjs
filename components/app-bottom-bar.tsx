import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Divider, SxProps, useTheme } from '@mui/material';
import Link from 'next/link';

export default function AppBottomBar() {
  const theme = useTheme();

  const AppBottomBarStyle: SxProps = {
    mt: '3rem',
    mb: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const dividerStyle: SxProps = {
    width: '90%',
  };

  const iconBoxStyle: SxProps = {
    my: '1rem',
    display: 'flex',
    width: '90%',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  };

  const iconStyle: SxProps = {
    fontSize: '3rem',
    mr: '2rem',
    color: theme.palette.text.primary,
  };

  return (
    <Box sx={AppBottomBarStyle}>
      <Divider sx={dividerStyle} />
      <Box sx={iconBoxStyle}>
        <a href='https://www.linkedin.com/in/maximeclement-iot/'>
          <LinkedInIcon sx={iconStyle} />
        </a>
        <a href='https://github.com/pseudoincorrect'>
          <GitHubIcon sx={iconStyle} />
        </a>
        <Link href='/contact'>
          <a>
            <EmailIcon sx={{ ...iconStyle, mr: '0' }} />
          </a>
        </Link>
      </Box>
    </Box>
  );
}

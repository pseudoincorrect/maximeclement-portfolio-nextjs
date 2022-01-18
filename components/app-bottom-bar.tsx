import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Divider, SxProps, useTheme } from '@mui/material';

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
    mt: '1rem',
    display: 'flex',
    width: '90%',
    justifyContent: 'flex-end',
  };

  return (
    <Box sx={AppBottomBarStyle}>
      <Divider sx={dividerStyle} />
      <Box sx={iconBoxStyle}>
        <LinkedInIcon sx={{ mr: '2rem' }} />
        <GitHubIcon sx={{ mr: '2rem' }} />
        <EmailIcon />
      </Box>
    </Box>
  );
}

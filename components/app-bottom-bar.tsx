import { Box, Divider, styled } from '@mui/material';

const AppBottomBarStyle = {
  width: '100%',
  position: 'fixed',
  bottom: 0,
  borderColor: 'secondary.main',
  borderStyle: 'solid',
};

export default function AppBottomBar() {
  return (
    <Box sx={AppBottomBarStyle}>
      <Divider />
      Bottom Bar
    </Box>
  );
}

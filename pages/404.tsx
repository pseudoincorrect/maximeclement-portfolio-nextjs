import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import type { NextPage } from 'next';
import PageContainer from '../components/layout/page-container';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PageHeaders from '../components/misc/page-headers';

const FourOFourPageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '30em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const FourOFourPage: NextPage = () => {
  return (
    <PageContainer imagePath='/images/404_background.jpg'>
      <FourOFourPageBox>
        <Typography variant='h1'>404</Typography>
        <Divider sx={{ width: '20em' }} />
        <Typography variant='h2'>Page not fount</Typography>
      </FourOFourPageBox>
    </PageContainer>
  );
};

export default FourOFourPage;

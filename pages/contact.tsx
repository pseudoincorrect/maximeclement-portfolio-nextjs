import {
  Box,
  Button,
  Card,
  CardContent,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import type { NextPage } from 'next';
import PageContainer from '../components/layout/page-container';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PageHeaders from '../components/misc/page-headers';

const ContactPageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '75vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ContactCardStyled = styled(Card)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '30rem',
  height: '100%',
  maxHeight: '30rem',
  flexDirection: 'column',
  margin: '1rem',
  borderRadius: '7px',
  borderWidth: '0.15rem',
  borderStyle: 'solid',
  borderColor: theme.palette.secondary.main,
  backgroundColor: 'rgba(0, 100, 255, 0.15)',
  backdropFilter: 'blur(4px)',
  opacity: '1',
}));

const CardContentStyled = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '100%',
  height: '100%',
}));

function ContactCard() {
  const theme = useTheme();
  return (
    <ContactCardStyled>
      <CardContentStyled>
        <Typography variant='h4' align='center'>
          Drop me a message !
        </Typography>
        {/* <Divider sx={{ width: '90%' }} /> */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography
            variant='h5'
            align='center'
            fontWeight={600}
            color={theme.palette.success.main}>
            maximeclement6@gmail.com
          </Typography>
          <Button
            color='success'
            variant='outlined'
            sx={{ marginTop: '1rem' }}
            onClick={() => {
              navigator.clipboard.writeText('maximeclement6@gmail.com');
            }}>
            copy Address
          </Button>
        </Box>
        {/* <Divider sx={{ width: '90%' }} /> */}
        <div
          style={{
            alignItems: 'center',
          }}>
          <MailOutlineIcon sx={{ fontSize: '12rem' }} />
        </div>
      </CardContentStyled>
    </ContactCardStyled>
  );
}

const ContactPage: NextPage = () => {
  return (
    <PageContainer imagePath='/images/contact/background.jpg'>
      <PageHeaders
        title='Contact'
        description='Contact page to reach Maxime Clement with his email address'
        keywords='contact address email link'
        page='contact'
        imageUrl='image?url=%2Fimages%2Fhome%2Fmax_pict.jpg&w=1920&q=80'
      />
      <ContactPageBox>
        <ContactCard />
      </ContactPageBox>
    </PageContainer>
  );
};

export default ContactPage;

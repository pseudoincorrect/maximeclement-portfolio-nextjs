import {
  Box,
  Card,
  styled,
  SxProps,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'next/image';

import HomeCard from '../components/home-card';
import PageContainer from '../components/page-container';

import type { NextPage } from 'next';

const StyledHomeTitleCard = styled(Card)(({ theme }) => ({
  padding: '1rem',
  width: '80%',
  maxWidth: '36rem',
  [theme.breakpoints.down('sm')]: {
    width: '95%',
  },
  borderWidth: '0.15rem',
  borderStyle: 'solid',
  borderColor: theme.palette.primary.main,
  backgroundColor: 'transparent',
  backdropFilter: 'blur(4px)',
  opacity: '1',
  margin: '0',
  textAlign: 'center',
}));

function HomeTitleCard() {
  const theme = useTheme();
  return (
    <StyledHomeTitleCard>
      <Typography variant='h4'>
        Need <b style={{ color: theme.palette.secondary.main }}> IoT </b> in
        your Projects ?
      </Typography>
      <br />
      <Typography variant='h4'>I can help with that </Typography>
    </StyledHomeTitleCard>
  );
}

const StyledImageDiv = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  marginTop: '2rem',
  borderRadius: '50%',
  alignSelf: 'center',
  width: '23rem',
  height: '23rem',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    width: '19rem',
    height: '19rem',
  },
  [theme.breakpoints.down('sm')]: {
    width: '13rem',
    height: '13rem',
  },
}));

function Presentation() {
  return (
    <Box
      style={{
        margin: '2rem 0',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <Typography variant='h4'>Bonjour ! </Typography>
      <StyledImageDiv>
        <Image
          alt='Maxime Clement'
          priority={true}
          src='/images/home/max_pict.jpg'
          layout='fill'
          objectFit='cover'
          quality={80}
        />
      </StyledImageDiv>

      <Typography variant='h4' sx={{ marginTop: '2rem' }}>
        Maxime here, IoT Engineer (Internet of Things)
      </Typography>
    </Box>
  );
}

const HomePage: NextPage = () => {
  const homePageStyle: SxProps = {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    pt: '2rem',
  };

  return (
    <PageContainer imagePath='/images/home/background.jpg'>
      <Box sx={homePageStyle}>
        <HomeTitleCard />
        <Presentation />
      </Box>
    </PageContainer>
  );
};

export default HomePage;

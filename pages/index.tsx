import { Box, Card, Grid, styled, Typography, useTheme } from '@mui/material';
import Image from 'next/image';

import AppLink from '../components/app-link';
import PageContainer from '../components/page-container';

import type { NextPage } from 'next';

const HomeTitleCard = styled(Card)(({ theme }) => ({
  width: '80%',
  maxWidth: '40rem',
  [theme.breakpoints.down('md')]: {
    width: '95%',
  },
  borderWidth: '0.15rem',
  borderStyle: 'solid',
  borderColor: theme.palette.primary.main,
  backgroundColor: 'transparent',
  backdropFilter: 'blur(4px)',
  opacity: '1',
  marginTop: '2rem',
  padding: '1rem',
  textAlign: 'center',
}));

const HomePictureDiv = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  borderRadius: '50%',
  alignSelf: 'center',
  width: '23rem',
  height: '23rem',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    width: '19rem',
    height: '19rem',
  },
  [theme.breakpoints.down('xs')]: {
    width: '13rem',
    height: '13rem',
  },
}));

const ImageDiv = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  borderRadius: '50%',
  alignSelf: 'center',
  width: '16rem',
  height: '16rem',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    width: '14rem',
    height: '14rem',
  },
  [theme.breakpoints.down('xs')]: {
    width: '10rem',
    height: '10rem',
  },
}));

const PresentationBox = styled(Box)(({ theme }) => ({
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
}));

const HomePageBox = styled(Box)({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  pt: '2rem',
});

const IotCard = styled(Card)(({ theme }) => ({
  padding: '1rem',
  marginTop: '2rem',
  width: '90%',
  maxWidth: '60rem',
  [theme.breakpoints.down('md')]: {
    width: '95%',
  },
  borderWidth: '0.15rem',
  borderStyle: 'solid',
  borderColor: theme.palette.secondary.main,
  backgroundColor: 'transparent',
  backdropFilter: 'blur(4px)',
  opacity: '1',
  textAlign: 'center',
}));

function HomeTitle() {
  const theme = useTheme();
  return (
    <HomeTitleCard>
      <Typography variant='h4'>
        Need <b style={{ color: theme.palette.secondary.main }}> IoT </b> in
        your Projects ?
      </Typography>
      <br />
      <Typography variant='h4'>I can help with that </Typography>
    </HomeTitleCard>
  );
}

function Presentation() {
  return (
    <PresentationBox>
      <HomePictureDiv>
        <Image
          alt='Maxime Clement'
          priority={true}
          src='/images/home/max_pict.jpg'
          layout='fill'
          objectFit='cover'
          quality={80}
        />
      </HomePictureDiv>

      <Typography variant='h4' sx={{ marginTop: '1rem' }}>
        Bonjour !
      </Typography>
      <Typography variant='h5' sx={{ marginTop: '1rem' }}>
        Maxime here, IoT Engineer (Internet of Things)
      </Typography>

      <span style={{ marginTop: '1rem' }}>
        <Typography variant='h5' display='inline'>
          Check my{' '}
        </Typography>
        <AppLink variant='h4' href='/projects' content='Projects' />
      </span>
    </PresentationBox>
  );
}

function IotDescription() {
  const theme = useTheme();
  return (
    <IotCard>
      <Typography align='justify'>
        You may have noticed the huge title up there with this catchy acronym:{' '}
        <AppLink variant='h6' href='/projects' content='IoT' />.
        <p>Well, what is it then ?</p>
      </Typography>
      <Typography align='justify' color={theme.palette.grey[500]}>
        <i>
          The Internet of things (IoT) is the extension of Internet connectivity
          into physical devices. Embedded with electronics, Internet
          connectivity, and other forms of hardware (such as sensors), these
          devices can communicate and interact with others over the Internet,
          and they can be remotely monitored and controlled. <br />- Wikipedia -
        </i>
      </Typography>

      <Typography variant='h5' align='justify' color={theme.palette.info.main}>
        <p>
          <b>
            IoT represents technologies behind [electronic] devices connected to
            internet.
          </b>
        </p>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography align='left' color={theme.palette.grey[500]}>
            <p>Few examples:</p>
            <ul>
              <li>Connected machinery in factories </li>
              <li>Smart city lights</li>
              <li>Smart home appliances</li>
              <li>Online package tracking</li>
              <li>Smart cars</li>
              <li>Connected sensors on power grids</li>
            </ul>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ImageDiv>
            <Image
              alt='Maxime Clement'
              priority={true}
              src='/images/home/echo_dot.jpg'
              layout='fill'
              objectFit='cover'
              quality={80}
            />
          </ImageDiv>
        </Grid>
      </Grid>
    </IotCard>
  );
}

function SkillsDescription() {}

const HomePage: NextPage = () => {
  return (
    <PageContainer imagePath='/images/home/background.jpg'>
      <HomePageBox>
        <HomeTitle />
        <Presentation />
        <IotDescription />
      </HomePageBox>
    </PageContainer>
  );
};

export default HomePage;

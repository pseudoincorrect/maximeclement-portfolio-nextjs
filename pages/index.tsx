import {
  Box,
  Card,
  Grid,
  keyframes,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'next/image';

import AppLink from '../components/misc/app-link';
import PageContainer from '../components/layout/page-container';

import type { NextPage } from 'next';
import PageHeaders from '../components/misc/page-headers';

const animatePop = keyframes`
  0% { transform: scale(0, 0) ;opacity: 0; } 
  80% { transform: scale(1.1, 1.1) ;opacity: 1; }
  100% { transform: scale(1, 1);}
`;

const animateBlink = keyframes`
  0% { opacity: 1; }
  17% { opacity: 0; }
  34% { opacity: 1; }
  51% { opacity: 0; }
  68% { opacity: 1; }
  85% { opacity: 0; }
  100% { opacity: 1; }
`;

const Bc = styled('b')(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

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
  [theme.breakpoints.down('md')]: {
    marginTop: '0',
  },
  padding: '1rem',
  textAlign: 'center',
}));

const HomePictureDiv = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  borderRadius: '50%',
  alignSelf: 'center',
  width: '18rem',
  height: '18rem',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    width: '13rem',
    height: '13rem',
  },
  [theme.breakpoints.down('xs')]: {
    width: '13rem',
    height: '13rem',
  },
}));

const ImageDeviceDiv = styled('div')({
  position: 'relative',
  display: 'flex',
  borderRadius: '50%',
  alignSelf: 'center',
  width: '12rem',
  height: '12rem',
  overflow: 'hidden',
});

const ImageDiagramDiv = styled('div')({
  position: 'relative',
  display: 'flex',
  borderRadius: '5px',
  alignSelf: 'center',
  width: '20rem',
  height: '13rem',
  overflow: 'hidden',
  marginBottom: '1rem',
});

const PresentationBox = styled(Box)(({ theme }) => ({
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
}));

const HomePageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  pt: '2rem',
  [theme.breakpoints.down('md')]: {
    pt: '0',
  },
}));

const homeCardBase = (theme: any): any => ({
  borderColor: theme.palette.secondary.main,
  padding: '1rem',
  marginTop: '2rem',
  borderWidth: '0.15rem',
  borderStyle: 'solid',
  backgroundColor: 'transparent',
  backdropFilter: 'blur(4px)',
  opacity: '1',
  textAlign: 'center',
  width: '90%',
  maxWidth: '50rem',
  [theme.breakpoints.down('md')]: {
    width: '95%',
  },
});

const HomeCardStyle1 = styled(Card)(({ theme }) => ({
  ...homeCardBase(theme),
}));

const HomeCardStyle2 = styled(Card)(({ theme }) => ({
  ...homeCardBase(theme),
  borderColor: theme.palette.primary.main,
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
          placeholder='blur'
          blurDataURL='/images/home/max_pict.jpg'
          alt='Maxime Clement Iot Engineer'
          priority={true}
          src='/images/home/max_pict.jpg'
          layout='fill'
          objectFit='cover'
          quality={80}
        />
      </HomePictureDiv>
      <Box
        sx={{
          marginTop: '1rem',
          animationName: `${animatePop}`,
          animationDuration: '1s',
          animationTimingFunction: 'cubic-bezier(.26, .53, .74, 1.48)',
          animationFillMode: 'forwards',
        }}>
        <Typography variant='h3'>Bonjour !</Typography>
      </Box>
      <Typography variant='h5' sx={{ marginTop: '1rem' }}>
        Maxime here, IoT Engineer (Internet of Things)
      </Typography>

      <span style={{ marginTop: '1rem' }}>
        <Typography variant='h5' display='inline'>
          Check my{' '}
        </Typography>
        <Box
          sx={{
            display: 'inline',
            animationName: `${animateBlink}`,
            animationDuration: '1.5s',
            animationTimingFunction: 'cubic-bezier(.26, .53, .74, 1.48)',
            animationDelay: '3s',
          }}>
          <AppLink size='30px' href='/projects' content='Projects' />
        </Box>
      </span>
    </PresentationBox>
  );
}

function IotDescription() {
  const theme = useTheme();
  return (
    <HomeCardStyle1>
      <Typography align='justify'>
        You may have noticed the huge title up there with this catchy acronym:{' '}
        <AppLink size='20px' href='/projects' content='IoT' />.
      </Typography>
      <Typography align='justify'>Well, what is it then ?</Typography>
      <br />
      <Typography align='justify' color={theme.palette.grey[300]}>
        <i>
          The Internet of things (IoT) is the extension of Internet connectivity
          into physical devices. Embedded with electronics, Internet
          connectivity, and other forms of hardware (such as sensors), these
          devices can communicate and interact with others over the Internet,
          and they can be remotely monitored and controlled. <br />- Wikipedia -
        </i>
      </Typography>
      <br />
      <Typography variant='h5' align='justify' color={theme.palette.info.main}>
        <Bc>
          IoT represents technologies behind [electronic] devices connected to
          internet.
        </Bc>
      </Typography>
      <br />
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ImageDeviceDiv>
            <Image
              placeholder='blur'
              blurDataURL='/images/image_loader.jpg'
              alt='IoT Device'
              priority={true}
              src='/images/home/echo_dot.jpg'
              layout='fill'
              objectFit='cover'
              quality={80}
            />
          </ImageDeviceDiv>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ textAlign: 'left', color: theme.palette.grey[300] }}>
            Few examples:
            <ul>
              <li>Connected machinery in factories </li>
              <li>Smart city lights</li>
              <li>Smart home appliances</li>
              <li>Online package tracking</li>
              <li>Smart cars</li>
              <li>Connected sensors on power grids</li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </HomeCardStyle1>
  );
}

function ToolsDescription() {
  const theme = useTheme();
  return (
    <HomeCardStyle2>
      <Typography align='justify'>
        It happens that I have been working in this domain mixing
        <Bc> web technologies</Bc>,<Bc> software</Bc> and <Bc>hardware</Bc>{' '}
        since 2014.
      </Typography>
      <br />
      <Typography align='justify'>
        Most of my projects were focused around creating both
        <Bc> cloud application</Bc> and an <Bc>physical device</Bc> customized
        for our needs.
      </Typography>
      <br />
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ImageDiagramDiv>
            <Image
              placeholder='blur'
              blurDataURL='/images/image_loader.jpg'
              alt='Maxime Clement'
              priority={true}
              src='/images/home/iot_diagram.jpg'
              layout='fill'
              objectFit='cover'
              quality={80}
            />
          </ImageDiagramDiv>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ textAlign: 'left', color: theme.palette.grey[300] }}>
            <p>A typical application involves:</p>
            <ul>
              <li>
                One or more Electronic <Bc>Device(s)</Bc>
              </li>
              <li>
                Its <Bc>Firmware</Bc> (software)
              </li>
              <li>
                A way to <Bc>Connect it to Internet</Bc>
              </li>
              <li>
                A <Bc>Backend</Bc> (Server application)
              </li>
              <li>
                A <Bc>Website</Bc> or Mobile App
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </HomeCardStyle2>
  );
}

function SkillsDescription() {
  const theme = useTheme();
  return (
    <HomeCardStyle1>
      <p style={{ textAlign: 'justify' }}>
        Naturally, a large variety of tools and programming languages are
        involved in this process. I try as much as I can to{' '}
        <Bc>pick the right tool for the current job</Bc>.
      </p>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <p style={{ textAlign: 'left' }}>
            I have mainly used (language and frameworks mixed):
          </p>
          <ul style={{ textAlign: 'left' }}>
            <li>
              <Bc> Typescript (or JS) </Bc> for the backend development
            </li>
            <li>
              <Bc> Serverless (CDK) and Docker </Bc> as a backend architecture
            </li>
            <li>
              <Bc> React (or Angular) </Bc> on the frontend
            </li>
            <li>
              <Bc> AWS </Bc> for the deployment and CI/CD
            </li>
            <li>
              <Bc> Python </Bc> for scripting, DSP prototyping, algorithms
              design
            </li>
            <li>
              <Bc> Dart/Flutter </Bc> for mobile application development
            </li>
            <li>
              <Bc> C </Bc> for firmware programming
            </li>
            <li>
              <Bc> Altium (or Eagle) </Bc> for the Printed Circuit Board design
            </li>
          </ul>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ImageDiagramDiv>
            <Image
              placeholder='blur'
              blurDataURL='/images/image_loader.jpg'
              alt='Maxime Clement'
              priority={true}
              src='/images/home/programming_languages.jpg'
              layout='fill'
              objectFit='cover'
              quality={80}
            />
          </ImageDiagramDiv>
        </Grid>
      </Grid>

      <p style={{ textAlign: 'justify' }}>
        A long list of Framework, SDK, Vendors IPs, and hardware are used along
        the way. <br />
        <br /> More information in the{' '}
        <u>
          <Bc>
            <AppLink size='20px' href='/skills' content='Skills' />
          </Bc>
        </u>{' '}
        section.
      </p>

      <p style={{ textAlign: 'justify' }}>
        The{' '}
        <u>
          <Bc>
            <AppLink size='20px' href='/projects' content='Projects' />
          </Bc>
        </u>{' '}
        page gives a deeper overview of the kind of work I usualy do.
      </p>
    </HomeCardStyle1>
  );
}

function EndNoteCard() {
  return (
    <HomeCardStyle2>
      <p>
        IoT, Cloud Applications and Embedded Systems are a true passion of mine.
        <br />
        <br />
        <u>
          <Bc>
            <AppLink size='16px' href='/contact' content='Contact' />
          </Bc>
        </u>{' '}
        me to discuss it.
      </p>
    </HomeCardStyle2>
  );
}

const HomePage: NextPage = () => {
  return (
    <PageContainer imagePath='/images/home/background.jpg'>
      <PageHeaders
        title='Maxime  Clement IoT Engineer'
        description='Hello ! I am Maxime Clement, IoT Engineer (Internet of Things) focused on cloud technologies for physical devices. I can link anything to the web... at scale !'
        keywords='Portfolio Home Page FullStack Backend Frontend IoT'
        page=''
        imageUrl='/_next/image?url=%2Fimages%2Fhome%2Fmax_pict.jpg&w=1920&q=80'
      />
      <HomePageBox>
        <HomeTitle />
        <Presentation />
        <IotDescription />
        <ToolsDescription />
        <SkillsDescription />
        <EndNoteCard />
      </HomePageBox>
      <br />
    </PageContainer>
  );
};

export default HomePage;

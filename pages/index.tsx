import { Box, Container } from '@mui/material';
import Image from 'next/image';
import HomeCard from '../components/home-card';

import type { NextPage } from 'next';
import { Fragment } from 'react';

const MyImage = (props: any) => {
  const { children } = props;
  return <Fragment></Fragment>;
};

const HomePage: NextPage = () => {
  return (
    <Container
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      {/* <MyImage></MyImage> */}

      <div
        style={{
          position: 'fixed',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          bottom: '0',
          left: '0',
          zIndex: '-1',
          opacity: '0.2',
        }}
      >
        <Image
          alt='travel'
          src={'/images/pages-background/coding.jpg'}
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>

      <HomeCard />
      <Box sx={{ width: '200px', height: '200px', position: 'relative' }}>
        <Image
          alt='Mountains'
          src={'/images/pages-background/coding.jpg'}
          // src='/mountains.jpg'
          layout='fill'
          objectFit='contain'
        />
      </Box>

      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
    </Container>
  );
};

export default HomePage;

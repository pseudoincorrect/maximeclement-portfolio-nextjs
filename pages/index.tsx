import { Box, Container } from '@mui/material';
import Image from 'next/image';
import HomeCard from '../components/home-card';

import type { NextPage } from 'next';
import { Fragment } from 'react';

const MyImage = (props: any) => {
  const { children } = props;
  return (
    <Fragment>
      <Box
        sx={{
          position: 'absolute',
          opacity: '0.15',
          width: '100%',
          height: '100%',
        }}
      >
        <Image
          src={'/images/pages-background/coding.jpg'}
          alt='coding'
          layout='fill'
          objectFit='cover'
          quality={10}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </Box>
    </Fragment>
  );
};

const HomePage: NextPage = () => {
  return (
    <Container
      sx={{
        height: '100vh%',
        flexDirection: 'column',
        overflow: 'hidden',
        scrollbarWidth: '5px',
        scrollbarColor: 'red',
      }}
    >
      {/* <MyImage> */}
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      {/* </MyImage> */}
    </Container>
  );
};

export default HomePage;

import { Box } from '@mui/material';
import Image from 'next/image';
import { Fragment } from 'react';

import HomeCard from '../components/home-card';
import PageContainer from '../components/page-container';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <PageContainer imagePath='/images/pages-background/coding.jpg'>
      <HomeCard />
      <Box sx={{ width: '200px', height: '200px', position: 'relative' }}>
        <Image
          alt='coding'
          src={'/images/pages-background/coding.jpg'}
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
    </PageContainer>
  );
};

export default HomePage;

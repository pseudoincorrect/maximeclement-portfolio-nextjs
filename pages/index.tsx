import { Box } from '@mui/material';

import HomeCard from '../components/home-card';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Box>
      <HomeCard />
      <HomeCard />
    </Box>
  );
};

export default HomePage;

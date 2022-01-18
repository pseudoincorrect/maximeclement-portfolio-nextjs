import { CardProps } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';

import HomeCard from '../components/home-card';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div>
      <HomeCard />
      <HomeCard />
    </div>
  );
};

export default HomePage;

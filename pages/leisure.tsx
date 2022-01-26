import { Box, Card, styled, Typography } from '@mui/material';
import type { NextPage } from 'next';
import PageContainer from '../components/layout/page-container';
import Carousel from '../components/misc/carousel';
import PageHeaders from '../components/misc/page-headers';

const LeisurePageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'space-evenly',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  overflow: 'hidden',
  marginTop: '5rem',
  marginBottom: '5rem',
  [theme.breakpoints.down('md')]: {
    marginTop: '3rem',
    marginBottom: '3rem',
  },
  // justifyContent: 'center',
}));

const CarouselDiv = styled('div')(({ theme }) => ({
  marginTop: '5rem',
  [theme.breakpoints.down('md')]: {
    marginTop: '3rem',
  },
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignContent: 'center',
}));

const leisuresData = [
  { path: '/images/leisures/guitar.jpg', alt: 'Guitar' },
  { path: '/images/leisures/MTB.jpg', alt: 'Mountain Bike' },
  { path: '/images/leisures/travelling.jpg', alt: 'Travelling' },
  { path: '/images/leisures/reading.jpg', alt: 'Reading' },
  { path: '/images/leisures/healthy.jpeg', alt: 'Healthy' },
  { path: '/images/leisures/hangout.jpg', alt: 'Hangout' },
];

const LeisuresPage: NextPage = () => {
  return (
    <PageContainer imagePath='/images/leisures/background.jpg'>
      <PageHeaders
        title='Outside Work'
        description='What Maxime Clement is doing outside work'
        keywords='Leisure sport holidays lifestyle music'
        page='leisure'
        imageUrl='/_next/image?url=%2Fimages%2Fleisures%2Fbackground.jpg&w=640&q=50'
      />
      <LeisurePageBox>
        <Typography variant='h3'>Let the images speak</Typography>
        <CarouselDiv>
          <Carousel images={leisuresData} height={255} maxWidth={500} />
        </CarouselDiv>
      </LeisurePageBox>
    </PageContainer>
  );
};

export default LeisuresPage;

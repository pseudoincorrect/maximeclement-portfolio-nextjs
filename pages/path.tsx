import { Box, styled } from '@mui/material';
import type { NextPage } from 'next';
import PageContainer from '../components/layout/page-container';
import PageHeaders from '../components/misc/page-headers';
import PathTimeline from '../components/path/path-timeline';

const PathPageBox = styled(Box)(({ theme }) => ({
  padding: '1rem',
}));

const PathPage: NextPage = () => {
  return (
    <PageContainer imagePath='/images/path/background.jpg'>
      <PageHeaders
        title='Path'
        description='Previous Experiences and Eduction of Maxime Clement.'
        keywords='School Diploma Work Experiences University CV Location Timeline'
        page='path'
        imageUrl='image?url=%2Fimages%2Fpath%2Fesstin.jpg&w=640&q=80'
      />
      <PathPageBox>
        <PathTimeline />
      </PathPageBox>
    </PageContainer>
  );
};

export default PathPage;

import { Box, styled } from '@mui/material';
import type { NextPage } from 'next';
import PageContainer from '../components/layout/page-container';
import PathTimeline from '../components/path/path-timeline';

const PathPageBox = styled(Box)(({ theme }) => ({
  padding: '1rem',
}));

const PathPage: NextPage = () => {
  return (
    <PageContainer imagePath='/images/path/background.jpg'>
      <PathPageBox>
        <PathTimeline />
      </PathPageBox>
    </PageContainer>
  );
};

export default PathPage;

import { Box } from '@mui/material';
import type { NextPage } from 'next';
import PageContainer from '../components/page-container';

const PathPage: NextPage = () => {
  return (
    <PageContainer imagePath='/images/path/background.jpg'>
      <Box>
        <h1>Path Page</h1>
      </Box>
    </PageContainer>
  );
};

export default PathPage;

import { Box } from '@mui/material';
import type { NextPage } from 'next';
import PageContainer from '../components/page-container';

const LeisuresPage: NextPage = () => {
  return (
    <PageContainer imagePath='/images/leisures/background.jpg'>
      <Box>
        <h1>Leisures Page</h1>
      </Box>
    </PageContainer>
  );
};

export default LeisuresPage;

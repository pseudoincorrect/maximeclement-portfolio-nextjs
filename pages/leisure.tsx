import { Box } from '@mui/material';
import type { NextPage } from 'next';
import PageContainer from '../components/layout/page-container';
import PageHeaders from '../components/misc/page-headers';

const LeisuresPage: NextPage = () => {
  return (
    <PageContainer imagePath='/images/leisures/background.jpg'>
      <PageHeaders
        title='Leisure Activities of Maxime Clement'
        description='What Maxime Clement is doing outside work'
        page='leisure'
        imageUrl='image?url=%2Fimages%2Fleisures%2Fbackground.jpg&w=640&q=50'
      />
      <Box>
        <h1>Leisures Page</h1>
      </Box>
    </PageContainer>
  );
};

export default LeisuresPage;

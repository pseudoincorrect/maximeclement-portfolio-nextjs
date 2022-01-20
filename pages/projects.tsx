import { Box } from '@mui/material';
import type { NextPage } from 'next';
import PageContainer from '../components/page-container';

const ProjectsPage: NextPage = () => {
  return (
    <PageContainer imagePath='/images/projects/background.jpg'>
      <Box>
        <h1>Projects Page</h1>
      </Box>
    </PageContainer>
  );
};

export default ProjectsPage;

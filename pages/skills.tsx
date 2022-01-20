import { Box } from '@mui/material';
import type { NextPage } from 'next';
import PageContainer from '../components/page-container';

const SkillsPages: NextPage = () => {
  return (
    <PageContainer imagePath='/images/skills/background.jpg'>
      <Box>
        <h1>Skills Page</h1>
      </Box>
    </PageContainer>
  );
};

export default SkillsPages;

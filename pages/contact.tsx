import { Box } from '@mui/material';
import type { NextPage } from 'next';
import PageContainer from '../components/layout/page-container';

const ContactPage: NextPage = () => {
  return (
    <PageContainer imagePath='/images/contact/background.jpg'>
      <Box>
        <h1>Contact Page</h1>
      </Box>
    </PageContainer>
  );
};

export default ContactPage;

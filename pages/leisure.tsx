import { Box, Card, styled } from '@mui/material';
import type { NextPage } from 'next';
import PageContainer from '../components/layout/page-container';
import PageHeaders from '../components/misc/page-headers';

const ContactPageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '75vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ContactCardStyled = styled(Card)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '30rem',
  height: '100%',
  maxHeight: '30rem',
  flexDirection: 'column',
  margin: '1rem',
  borderRadius: '7px',
  borderWidth: '0.15rem',
  borderStyle: 'solid',
  borderColor: theme.palette.secondary.main,
  backgroundColor: 'rgba(0, 100, 255, 0.15)',
  backdropFilter: 'blur(4px)',
  opacity: '1',
}));

const LeisuresPage: NextPage = () => {
  return (
    <PageContainer imagePath='/images/leisures/background.jpg'>
      <PageHeaders
        title='Leisure Activities of Maxime Clement'
        description='What Maxime Clement is doing outside work'
        page='leisure'
        imageUrl='image?url=%2Fimages%2Fleisures%2Fbackground.jpg&w=640&q=50'
      />
      <ContactPageBox>
        <ContactCardStyled></ContactCardStyled>
      </ContactPageBox>
    </PageContainer>
  );
};

export default LeisuresPage;

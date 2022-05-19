import {
  Box,
  Button,
  Link,
  Card,
  CardContent,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import type { NextPage } from 'next';
import PageContainer from '../components/layout/page-container';
import PageHeaders from '../components/misc/page-headers';
import DownloadIcon from '@mui/icons-material/Download';

const DocumentsPageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '75vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const DocumentsCardStyled = styled(Card)(({ theme }) => ({
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

const CardContentStyled = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '100%',
  height: '100%',
});

const ButtonStyled = styled(Button)({
  padding: '15px 25px',
});

const LinkStyled = styled(Link)({
  textDecoration: 'none',
});

function DocumentsCard() {
  const theme = useTheme();
  return (
    <DocumentsCardStyled>
      <CardContentStyled>
        <Typography variant='h4' align='center'>
          Documents
        </Typography>
        <LinkStyled download href='documents/cv/CV English Maxime Clement.pdf'>
          <ButtonStyled variant='contained'>
            <Typography variant='h6' align='center'>
              CV - English
            </Typography>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <DownloadIcon sx={{ fontSize: 30 }} />
          </ButtonStyled>
        </LinkStyled>
        <LinkStyled download href='documents/cv/CV Francais Maxime Clement.pdf'>
          <ButtonStyled variant='contained'>
            <Typography variant='h6' align='center'>
              CV - Français
            </Typography>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <DownloadIcon sx={{ fontSize: 30 }} />
          </ButtonStyled>
        </LinkStyled>
      </CardContentStyled>
    </DocumentsCardStyled>
  );
}

const DocumentsPage: NextPage = () => {
  return (
    <PageContainer imagePath='/images/contact/background.jpg'>
      <PageHeaders
        title='Documents'
        description='Documents page to download documents'
        keywords='Documents download items CV'
        page='Documents'
        imageUrl='/_next/image?url=%2Fimages%2Fhome%2Fmax_pict.jpg&w=1920&q=80'
      />
      <DocumentsPageBox>
        <DocumentsCard />
      </DocumentsPageBox>
    </PageContainer>
  );
};

export default DocumentsPage;

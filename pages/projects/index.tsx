import {
  Box,
  Card,
  CardActionArea,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import type { NextPage } from 'next';
import PageContainer from '../../components/layout/page-container';
import PageHeaders from '../../components/misc/page-headers';
import projectData from '../../components/projects/projects-data.json';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ProjectPageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  overflow: 'hidden',
}));

const CardShortProjStyled = styled(Card)(({ theme }) => ({
  cursor: 'pointer',
  border: '3px solid rgba(0, 0, 0, 0.3)',
  borderRadius: '7px',
  height: '20em',
  width: '20em',
  margin: '1em',
  boxShadow:
    '0 6px 12px 0 rgba(0, 0, 0, 0.3), 0 8px 20px 0 rgba(0, 0, 0, 0.29);',
  backgroundColor: 'rgba(0,0,0,0.5)',
  backdropFilter: 'blur(4px)',
  ':hover': {
    transform: 'scale(1.05)',
  },
}));

function ShortProjectCard({ picture, title, summary, projectIndex }: any) {
  const router = useRouter();
  const theme = useTheme();

  return (
    <CardShortProjStyled>
      <CardActionArea onClick={() => router.push(`/projects/${projectIndex}`)}>
        <div
          style={{
            width: '100%',
            height: '150px',
            position: 'relative',
            marginBottom: '1rem',
          }}>
          <Image
            placeholder='blur'
            blurDataURL='/images/image_loader.jpg'
            alt={picture.alt}
            priority={true}
            src={picture.path}
            layout='fill'
            objectFit='cover'
            quality={80}
          />
        </div>
        <Typography
          variant='h5'
          align='center'
          fontWeight='bold'
          color={theme.palette.warning.main}
          sx={{ marginBottom: '0.5em' }}>
          {title}
        </Typography>
        <Typography
          align='justify'
          sx={{
            marginRight: '0.5em',
            marginLeft: '0.5em',
            marginBottom: '0.5em',
          }}>
          {summary}
        </Typography>
      </CardActionArea>
    </CardShortProjStyled>
  );
}

const ProjectsPage: NextPage = () => {
  return (
    <PageContainer imagePath='/images/projects/background.jpg'>
      <PageHeaders
        title='Projects'
        description='Projects made by Maxime Clement revolving around Internet of Things (IoT).'
        keywords='Fullstack application frontend backend hardware firmware deployment'
        page='projects'
        imageUrl='/_next/image?url=%2Fimages%2Fprojects%2FlorawanHealthOverview%2Farchitecture_1.png&w=1080&q=80'
      />
      <ProjectPageBox>
        {projectData.map((e, index) => {
          return (
            <ShortProjectCard
              key={`${index}${e.title}`}
              projectIndex={index}
              picture={e.mainPictures[0]}
              title={e.title}
              summary={e.shortSummary}
            />
          );
        })}
      </ProjectPageBox>
    </PageContainer>
  );
};

export default ProjectsPage;

import { Box, styled } from '@mui/material';
import type { NextPage } from 'next';
import PageContainer from '../../components/layout/page-container';
import PageHeaders from '../../components/misc/page-headers';
import ProjectCard from '../../components/projects/project-card';
import projectData from '../../components/projects/projects-data.json';

const ProjectPageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: '1rem',
  [theme.breakpoints.down('md')]: {
    padding: '0.1rem',
  },
}));

const ProjectsPage: NextPage = () => {
  return (
    <PageContainer imagePath='/images/projects/background.jpg'>
      <PageHeaders
        title='Projects details'
        description='All in details Projects made by Maxime Clement revolving around Internet of Things (IoT).'
        keywords='Fullstack application frontend backend hardware firmware deployment'
        page='projects'
        imageUrl='image?url=%2Fimages%2Fprojects%2FlorawanHealthOverview%2Farchitecture_1.png&w=1080&q=80'
      />
      <ProjectPageBox>
        {projectData.map((e, index) => (
          <ProjectCard
            key={e.title}
            title={e.title}
            mainPictures={e.mainPictures}
            summary={e.summary}
            details={e.details}
            detailsPictures={e.detailsPictures}
            tags={e.tags}
            location={e.location}
            date={e.date}
          />
        ))}
      </ProjectPageBox>
    </PageContainer>
  );
};

export default ProjectsPage;

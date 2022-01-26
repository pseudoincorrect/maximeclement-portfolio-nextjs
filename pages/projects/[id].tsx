import { Box, styled } from '@mui/material';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import PageContainer from '../../components/layout/page-container';
import PageHeaders from '../../components/misc/page-headers';
import ProjectCard from '../../components/projects/project-card';
import projectData from '../../components/projects/projects-data.json';
import FourOFourPage from '../404';

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
  const router = useRouter();

  const { id } = router.query;
  if (!(typeof id === 'string') || id == undefined) {
    return <p>404 Page not found</p>;
  }

  const idNum: number = +id;

  if (idNum < 0 || idNum > +projectData.length) {
    return <p>404 Page not found</p>;
  }

  const project = projectData[idNum];

  return (
    <PageContainer imagePath='/images/projects/background.jpg'>
      <PageHeaders
        title='Projects'
        description='Projects made by Maxime Clement revolving around Internet of Things (IoT).'
        keywords='Fullstack application frontend backend hardware firmware deployment'
        page='projects'
        imageUrl='image?url=%2Fimages%2Fprojects%2FlorawanHealthOverview%2Farchitecture_1.png&w=1080&q=80'
      />
      <ProjectPageBox>
        <ProjectCard
          key={project.title}
          title={project.title}
          mainPictures={project.mainPictures}
          summary={project.summary}
          details={project.details}
          detailsPictures={project.detailsPictures}
          tags={project.tags}
          location={project.location}
          date={project.date}
        />
      </ProjectPageBox>
    </PageContainer>
  );
};

export default ProjectsPage;

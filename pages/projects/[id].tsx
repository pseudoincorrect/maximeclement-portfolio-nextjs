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
        title={`Project${project.title}`}
        description={project.shortSummary}
        keywords={project.tags}
        page={`project/${idNum}`}
        imageUrl={project.mainPictures[0].path}
      />
      <ProjectPageBox>
        <ProjectCard
          key={project.title}
          title={project.title}
          mainPictures={project.mainPictures}
          summary={project.summary}
          details={project.details}
          tags={project.tags}
          location={project.location}
          date={project.date}
        />
      </ProjectPageBox>
    </PageContainer>
  );
};

export default ProjectsPage;

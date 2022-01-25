import { Box, Card, Divider, styled, Typography } from '@mui/material';

import PageContainer from '../components/layout/page-container';
import SkillsPieChart from '../components/skills/skills-pie-expertise';
import SkillsFrameworkData from '../components/skills/skills-framework';
import SkillsExpertiseData from '../components/skills/skills-expertise';
import SkillsCommunicationData from '../components/skills/skills-communication';
import SkillsRadarCoding from '../components/skills/skills-radar-coding';

import type { NextPage } from 'next';
import PageHeaders from '../components/misc/page-headers';

const SkillPageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  padding: '1rem',
  [theme.breakpoints.down('md')]: {
    padding: '0.1rem',
  },
  '& li': {
    margin: '0rem',
  },

  '& ul': {
    margin: '0rem',
  },

  '& .title-lvl-1': {
    color: theme.palette.warning.main,
    fontWeight: 'bold',
    fontSize: '20px',
    marginTop: '0.7rem',
  },

  '& .title-lvl-2': {
    fontSize: '18px',
    marginTop: '0.5rem',
  },
}));

const SkillColumnBox = styled(Box)(({ theme }) => ({
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyItems: 'center',
  alignItems: 'center',
  padding: '0 1rem',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
  },
}));

const SkillCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  maxWidth: '40rem',
  margin: '1rem',
  padding: '1rem',
  borderRadius: '7px',
  borderWidth: '0.15rem',
  borderStyle: 'solid',
  borderColor: theme.palette.primary.main,
  backgroundColor: 'transparent',
  backdropFilter: 'blur(4px)',
  opacity: '1',
}));

const SkillChartCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  maxWidth: '40rem',
  maxHeight: '30rem',
  margin: '1rem',
  padding: '1rem',
  borderRadius: '7px',
  borderWidth: '0.15rem',
  borderStyle: 'solid',
  borderColor: theme.palette.primary.main,
  backgroundColor: 'transparent',
  backdropFilter: 'blur(4px)',
  opacity: '1',
}));

const SkillTitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}));

function ContentChart({ title, children }: any) {
  return (
    <SkillChartCard>
      <Box sx={{ padding: '1rem' }}>
        <Typography variant='h3' align='center'>
          {title}
        </Typography>
      </Box>
      <Divider />
      {children}
    </SkillChartCard>
  );
}

function ContentList({ title, children }: any) {
  return (
    <SkillCard>
      <Typography variant='h3' align='center' sx={{ paddingBottom: '1rem' }}>
        {title}
      </Typography>
      <Divider />
      {children}
    </SkillCard>
  );
}

const SkillsPages: NextPage = () => {
  return (
    <PageContainer imagePath='/images/skills/background.jpg'>
      <PageHeaders
        title='Skills'
        description='Skills and Expertise of Maxime Clement.'
        keywords='Programming Languages Framework Expertise software development Cloud Applications'
        page='skills'
        imageUrl='image?url=%2Fimages%2Fhome%2Fiot_diagram.jpg&w=640&q=80'
      />
      <SkillPageBox>
        <SkillTitleBox>
          <Typography variant='h2'>Skills</Typography>
        </SkillTitleBox>
        <SkillColumnBox>
          <ContentChart title='Areas of Expertise'>
            <SkillsPieChart />
          </ContentChart>
          <ContentList title='Areas of Expertise (details)'>
            <SkillsExpertiseData />
          </ContentList>
          <ContentList title='Soft Skills'>
            <SkillsCommunicationData />
          </ContentList>
        </SkillColumnBox>
        <SkillColumnBox>
          <ContentChart title='Coding Skills'>
            <SkillsRadarCoding />
          </ContentChart>
          <ContentList title='Frameworks & Tools'>
            <SkillsFrameworkData />
          </ContentList>
        </SkillColumnBox>
      </SkillPageBox>
    </PageContainer>
  );
};

export default SkillsPages;

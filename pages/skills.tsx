import { Box, Card, Divider, styled, Typography } from '@mui/material';

import PageContainer from '../components/page-container';
import SkillsPieChart from '../components/skills/skills-pie-expertise';
import SkillsFrameworkData from '../components/skills/skills-framework';
import SkillsExpertiseData from '../components/skills/skills-expertise';
import SkillsCommunicationData from '../components/skills/skills-communication';
import SkillsRadarCoding from '../components/skills/skills-radar-coding';

import type { NextPage } from 'next';

const SkillPageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  padding: '1rem',
  [theme.breakpoints.down('md')]: {
    padding: '0.1rem',
  },
}));

const SkillColumnBox = styled(Box)(({ theme }) => ({
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyItems: 'center',
  alignItems: 'center',
  padding: '0 1rem',
  [theme.breakpoints.down('md')]: {
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

const SkillTitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}));

function ContentChart({ title, children }: any) {
  return (
    <SkillCard
      sx={{
        width: '100%',
        height: '100%',
        maxHeight: '40rem',
        padding: '0',
      }}>
      <Typography variant='h3' align='center' sx={{ padding: '1rem' }}>
        {title}
      </Typography>
      <Divider />
      {children}
    </SkillCard>
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

function TmpItem({ title, count, children }: any) {
  return (
    <SkillCard>
      <Typography variant='h3' align='center' sx={{ paddingBottom: '1rem' }}>
        {title}
      </Typography>
      <Divider />
      {Array.from({ length: count }, (_, i) => (
        <p key={i}>{children}</p>
      ))}
    </SkillCard>
  );
}

function SkillListItems({ items, children }: any) {
  return { children };
}

const SkillsPages: NextPage = () => {
  return (
    <PageContainer imagePath='/images/skills/background.jpg'>
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

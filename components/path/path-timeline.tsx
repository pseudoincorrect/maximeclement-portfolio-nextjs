import 'react-vertical-timeline-component/style.min.css';

import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Image from 'next/image';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import PathData from './path-data.json';
import { styled, useTheme } from '@mui/material';

interface TimelineElementProps {
  isSchool: boolean;
  title: string;
  keyPoints: string[];
  location: string;
  dateRange: string;
  picturePath: string;
  colorBg: string;
  colorFg: string;
}

const ImageDiv = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '1rem',
  hyphens: 'auto',
  width: '100%',
  height: '13rem',
  [theme.breakpoints.down('md')]: {
    height: '11rem',
  },

  [theme.breakpoints.down('sm')]: {
    height: '9rem',
  },

  [theme.breakpoints.down('xs')]: {
    height: '7rem',
  },
}));

const DescriptionLi = styled('p')(({ theme }) => ({
  fontSize: '16px',
  textAlign: 'justify',
  textJustify: 'inter-word',
  // wordBreak: 'break-all',
  paddingBottom: '0.5rem',
  '& > b': {
    color: theme.palette.secondary.main,
  },
}));

function TimelineElement({
  isSchool,
  title,
  keyPoints,
  location,
  dateRange,
  picturePath,
  colorBg,
  colorFg,
}: TimelineElementProps) {
  const theme = useTheme();
  return (
    <VerticalTimelineElement
      visible={true}
      style={{ padding: '0' }}
      className='vertical-timeline-element--work'
      contentStyle={{ background: colorBg, color: colorFg }}
      contentArrowStyle={{ borderRight: '7px solid  colorBg' }}
      date={dateRange}
      iconStyle={{ background: 'black', color: colorFg }}
      icon={isSchool ? <SchoolIcon /> : <WorkIcon />}>
      <h2
        className='vertical-timeline-element-title'
        style={{
          marginBottom: '1rem',
          color: theme.palette.text.primary,
          textAlign: 'center',
        }}>
        {title}
      </h2>
      <ImageDiv>
        <Image
          placeholder='blur'
          blurDataURL='/images/image_loader.jpg'
          alt={title}
          priority={true}
          src={picturePath}
          layout='fill'
          objectFit='contain'
          quality={80}
        />
      </ImageDiv>
      <h4
        className='vertical-timeline-element-subtitle'
        style={{
          margin: '1rem ',
          color: theme.palette.grey[500],
          textAlign: 'center',
        }}>
        {location}
      </h4>
      {keyPoints.map((e: string, i: number) => (
        <DescriptionLi key={`${i}`} dangerouslySetInnerHTML={{ __html: e }} />
      ))}
    </VerticalTimelineElement>
  );
}

export default function PathTimeline() {
  return (
    <VerticalTimeline>
      {PathData.map((e) => (
        <TimelineElement
          key={e.title}
          isSchool={e.isSchool}
          title={e.title}
          keyPoints={e.keyPoints}
          location={e.location}
          dateRange={e.dateRange}
          picturePath={e.picturePath}
          colorBg={e.colorBg}
          colorFg={e.colorFg}
        />
      ))}
    </VerticalTimeline>
  );
}

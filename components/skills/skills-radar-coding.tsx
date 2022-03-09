import React, { PureComponent } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    subject: 'Typescript & JS',
    level: 95,
    fullMark: 100,
  },
  {
    subject: 'Python',
    level: 85,
    fullMark: 100,
  },
  {
    subject: 'C',
    level: 95,
    fullMark: 100,
  },
  {
    subject: 'HTML/CSS',
    level: 85,
    fullMark: 100,
  },
  {
    subject: 'Golang',
    level: 85,
    fullMark: 100,
  },
  {
    subject: 'Dart',
    level: 90,
    fullMark: 100,
  },
  {
    subject: 'Bash',
    level: 75,
    fullMark: 100,
  },
];

function customTick({ payload, x, y, textAnchor, stroke, radius }: any) {
  return (
    <text
      style={{ font: 'bold 15px sans-serif' }}
      radius={radius}
      stroke={stroke}
      x={x}
      y={y}
      fill='white'
      textAnchor={textAnchor}>
      {payload.value}
    </text>
  );
}

export default function SkillsRadarCoding() {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey='subject' tick={customTick} />
        {/* <PolarRadiusAxis /> */}
        <Radar
          name='CodingSkills'
          dataKey='level'
          stroke='#556cd6'
          fill='#6fd1c8'
          fillOpacity={0.3}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

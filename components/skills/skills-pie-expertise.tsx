import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

function renderLabel(entry: any) {
  return entry.name;
}

const data = [
  { name: 'Frontend', value: 200 },
  { name: 'Backend', value: 400 },
  { name: 'Hard/Firmware', value: 300 },
  { name: 'Project Mngt', value: 200 },
];

const COLORS = ['#e09f3e', '#335c67', '#9e2a2b', '#540b0e'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  name,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.65;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      style={{ font: 'bold 15px sans-serif' }}
      x={x}
      y={y}
      fill='white'
      textAnchor='middle'
      dominantBaseline='central'>
      {`${name}`}
    </text>
  );
};

export default function SkillsPieChart(props: any) {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          labelLine={false}
          label={renderCustomizedLabel}
          // outerRadius={300}
          fill='#8884d8'
          dataKey='value'>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

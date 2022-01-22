import AddRoadIcon from '@mui/icons-material/AddRoad';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import CheckIcon from '@mui/icons-material/Check';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import HomeIcon from '@mui/icons-material/Home';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';

interface AppDrawerItemData {
  route: string;
  icon: any;
  name: string;
}

const drawerData: AppDrawerItemData[] = [
  {
    name: 'Home',
    route: '/',
    icon: <HomeIcon sx={{ fontSize: 50 }} />,
  },
  {
    name: 'Projects',
    route: '/projects',
    icon: <CheckIcon sx={{ fontSize: 50 }} />,
  },
  {
    name: 'Skills',
    route: '/skills',
    icon: <ArchitectureIcon sx={{ fontSize: 50 }} />,
  },
  {
    name: 'Path',
    route: '/path',
    icon: <AddRoadIcon sx={{ fontSize: 50 }} />,
  },
  {
    name: 'Leisure',
    route: '/leisure',
    icon: <SportsTennisIcon sx={{ fontSize: 50 }} />,
  },
  {
    name: 'Contact',
    route: '/contact',
    icon: <ContactPageIcon sx={{ fontSize: 50 }} />,
  },
];

function AppDrawerItem(props: {
  data: AppDrawerItemData;
  clicked: () => void;
}) {
  const { data, clicked } = props;
  const router = useRouter();

  return (
    <ListItem
      button
      onClick={(e) => {
        e.preventDefault();
        clicked();
        router.push(data.route);
      }}
      sx={{ margin: '2rem 0' }}
    >
      <ListItemIcon>{data.icon}</ListItemIcon>
      <ListItemText
        primary={data.name}
        primaryTypographyProps={{ fontSize: '20px', marginLeft: '1rem' }}
      />
    </ListItem>
  );
}

export default function AppDrawerItems(props: { clicked: () => void }) {
  return (
    <List>
      {drawerData.map((d) => (
        <AppDrawerItem
          data={{ name: d.name, route: d.route, icon: d.icon }}
          clicked={props.clicked}
          key={d.name}
        />
      ))}
    </List>
  );
}

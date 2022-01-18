import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
    icon: <DashboardIcon />,
  },
  {
    name: 'Projects',
    route: '/projects',
    icon: <DashboardIcon />,
  },
  {
    name: 'Skills',
    route: '/skills',
    icon: <DashboardIcon />,
  },
  {
    name: 'Path',
    route: '/path',
    icon: <DashboardIcon />,
  },
  {
    name: 'Leisure',
    route: '/leisure',
    icon: <DashboardIcon />,
  },
  {
    name: 'Contact',
    route: '/contact',
    icon: <DashboardIcon />,
  },
];

function AppDrawerItem(props: { data: AppDrawerItemData }) {
  const data = props.data;
  const router = useRouter();
  return (
    <ListItem
      button
      onClick={(e) => {
        e.preventDefault();
        console.log('lets go home');
        router.push(data.route);
      }}
    >
      <ListItemIcon>{data.icon}</ListItemIcon>
      <ListItemText primary={data.name} />
    </ListItem>
  );
}

export default function AppDrawerItems() {
  const router = useRouter();
  return (
    <List>
      {drawerData.map((d) => (
        <AppDrawerItem
          data={{ name: d.name, route: d.route, icon: d.icon }}
          key={d.name}
        />
      ))}
    </List>
  );
}

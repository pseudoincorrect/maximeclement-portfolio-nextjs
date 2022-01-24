import { styled, Typography } from '@mui/material';
import Link from 'next/link';

const LinkA = styled('a')(({ theme }) => ({
  textDecoration: 'underline',
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  cursor: 'pointer',
  transform: 'scale(1)',
  '&:hover': {
    textDecoration: 'underline',
    transform: 'scale(1.25)',
  },
}));

interface AppLinkProps {
  href: string;
  content: string;
  size: any;
}

export default function AppLink(props: AppLinkProps) {
  const { size, content, href } = props;

  return (
    <span>
      <Link href={href}>
        <LinkA sx={{ fontSize: size }}>{content}</LinkA>
      </Link>
    </span>
  );
}

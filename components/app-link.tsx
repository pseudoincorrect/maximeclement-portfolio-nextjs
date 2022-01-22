import { styled, Typography } from '@mui/material';
import Link from 'next/link';

const LinkA = styled('a')(({ theme }) => ({
  textDecoration: 'none',
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
  variant: any;
}

export default function AppLink(props: AppLinkProps) {
  const { variant, content, href } = props;

  return (
    <Typography variant={variant} display='inline'>
      <Link href={href}>
        <LinkA>{content}</LinkA>
      </Link>
    </Typography>
  );
}

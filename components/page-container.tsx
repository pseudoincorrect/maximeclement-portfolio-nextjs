import { Box, BoxProps } from '@mui/material';
import Image from 'next/image';

interface PageBoxProps extends BoxProps {
  imagePath: string;
}

export default function PageContainer(props: PageBoxProps) {
  const { children, imagePath } = props;

  return (
    <Box>
      <Box
        style={{
          position: 'fixed',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          bottom: '0',
          left: '0',
          opacity: '0.3',
          zIndex: '-1',
        }}
      >
        <Image
          alt='page background'
          loading='eager'
          src={imagePath}
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </Box>
      <Box
        style={{
          position: 'fixed',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          bottom: '0',
          left: '0',
          zIndex: '-1',
          opacity: '0.6',
          backgroundColor: 'black',
        }}
      />
      {children}
    </Box>
  );
}

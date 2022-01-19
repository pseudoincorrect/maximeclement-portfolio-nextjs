import { Box, Container, ContainerProps } from '@mui/material';
import Image from 'next/image';

interface PageContainerProps extends ContainerProps {
  imagePath: string;
}

export default function PageContainer(props: PageContainerProps) {
  const { children, imagePath } = props;

  return (
    <Container
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          position: 'fixed',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          bottom: '0',
          left: '0',
          zIndex: '-1',
          opacity: '0.2',
        }}
      >
        <Image
          alt='page background'
          src={imagePath}
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      {children}
    </Container>
  );
}

import { Box, BoxProps, styled } from '@mui/material';
import Image from 'next/image';

interface PageBoxProps extends BoxProps {
  imagePath: string;
}

const ImageBox = styled(Box)({
  position: 'fixed',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
  bottom: '0',
  left: '0',
  opacity: '0.4',
  zIndex: '-1',
});

const PageBox = styled(Box)({
  position: 'fixed',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
  bottom: '0',
  left: '0',
  zIndex: '-1',
  opacity: '0.6',
  backgroundColor: 'black',
});

export default function PageContainer(props: PageBoxProps) {
  const { children, imagePath } = props;

  return (
    <Box>
      <ImageBox>
        <Image
          priority={true}
          placeholder='blur'
          blurDataURL={imagePath}
          alt='page background'
          loading='eager'
          src={imagePath}
          layout='fill'
          objectFit='cover'
          quality={50}
        />
      </ImageBox>
      <PageBox />
      {children}
    </Box>
  );
}

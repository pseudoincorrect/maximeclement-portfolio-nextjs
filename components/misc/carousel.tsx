import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Image from 'next/image';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface CarouselProps {
  images: { path: string; alt: string }[];
  height?: number;
  maxWidth?: number;
  isCover?: boolean;
}

function Carousel({
  images,
  height = 255,
  maxWidth = 400,
  isCover = false,
}: CarouselProps) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents>
        {images.map((step, index) => (
          <div key={`${index}`}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  position: 'relative',
                  height: height,
                  display: 'block',
                  maxWidth: maxWidth,
                  overflow: 'hidden',
                  width: '100%',
                }}>
                <Image
                  placeholder='blur'
                  blurDataURL='/images/image_loader.jpg'
                  alt={step.alt}
                  priority={false}
                  src={step.path}
                  layout='fill'
                  objectFit={isCover ? 'cover' : 'contain'}
                  quality={80}
                />
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{ backgroundColor: 'transparent' }}
        color='transparent'
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        nextButton={
          <Button
            size='small'
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

interface CarouselProps {}

export default Carousel;

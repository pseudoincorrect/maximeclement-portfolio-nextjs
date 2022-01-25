import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Carousel from '../misc/carousel';

const CardStyled = styled(Card)(({ theme }) => ({
  width: '90%',
  display: 'flex',
  flexDirection: 'column',
  margin: '1rem',
  maxWidth: '40rem',
  [theme.breakpoints.down('md')]: {
    margin: '0.5rem',
    width: '95%',
  },
  borderWidth: '0.15rem',
  borderStyle: 'solid',
  borderColor: theme.palette.primary.main,
  backgroundColor: 'transparent',
  backdropFilter: 'blur(4px)',
  opacity: '1',
}));

interface ProjectCardProps {
  title: string;
  mainPictures: { path: string; alt: string }[];
  summary: string;
  details: string;
  detailsPictures: { path: string; alt: string }[];
  tags: string;
  location: string;
  date: string;
}

const CarouselDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
}));

const HtmlTxtBox = styled('span')(({ theme }) => ({
  textAlign: 'justify',
  margin: '0 1rem',
  '&  a': {
    color: theme.palette.info.main,
  },
  '&  b': {
    color: theme.palette.warning.main,
  },
}));

export default function ProjectCard({
  title,
  mainPictures,
  summary,
  details,
  detailsPictures,
  tags,
  location,
  date,
}: ProjectCardProps) {
  const theme = useTheme();

  return (
    <CardStyled>
      <div style={{ margin: '1rem' }}>
        <Typography variant='h3' align='center'>
          {title}
        </Typography>
      </div>
      <CarouselDiv>
        <Carousel images={mainPictures} />
      </CarouselDiv>

      <HtmlTxtBox dangerouslySetInnerHTML={{ __html: summary }} />

      <Accordion sx={{ backgroundColor: 'transparent' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          sx={{
            backgroundColor: theme.custom.backgrounds.b2,
          }}>
          <Typography align='right' variant='h5'>
            More details...
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <CarouselDiv>
            <Carousel images={detailsPictures} />
          </CarouselDiv>

          <HtmlTxtBox dangerouslySetInnerHTML={{ __html: details }} />
        </AccordionDetails>
      </Accordion>
      <div style={{ margin: '0.5rem' }}>
        <Typography>
          {location} , {date}
        </Typography>
      </div>
      <div style={{ margin: '0.5rem', marginTop: '0' }}>
        <Typography>{tags}</Typography>
      </div>
    </CardStyled>
  );
}

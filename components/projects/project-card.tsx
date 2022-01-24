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
import Image from 'next/image';

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
  mainPictures: string[];
  summary: string;
  details: string;
  detailsPictures: string[];
  tags: string;
  location: string;
  date: string;
}

const ImageDiv = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  width: '90%',
  margin: '1rem',
  height: '20rem',
  [theme.breakpoints.down('md')]: {
    height: '17rem',
  },

  [theme.breakpoints.down('sm')]: {
    height: '14rem',
  },

  [theme.breakpoints.down('xs')]: {
    height: '10rem',
  },
}));

const HtmlTxtBox = styled('span')(({ theme }) => ({
  textAlign: 'justify',
  margin: '0 1rem',
  '&  a': {
    color: theme.palette.warning.main,
  },
  '&  b': {
    color: theme.palette.info.main,
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
      <ImageDiv>
        <Image
          alt={title}
          // priority={true}
          src={mainPictures[0]}
          layout='fill'
          objectFit='contain'
          quality={80}
        />
      </ImageDiv>
      <div style={{ margin: '0.5rem' }}>
        <Typography variant='h4' align='center'>
          {title}
        </Typography>
      </div>
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
          <ImageDiv>
            <Image
              alt={title}
              // priority={true}
              src={detailsPictures[0]}
              layout='fill'
              objectFit='contain'
              quality={80}
            />
          </ImageDiv>

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

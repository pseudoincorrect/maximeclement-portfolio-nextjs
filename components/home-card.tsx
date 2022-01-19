import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  SxProps,
  useTheme,
} from '@mui/material';
import { Fragment } from 'react';
import { hexToRGBA } from '../helpers/helpers';

function TheCardContent() {
  return (
    <Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant='h5' component='div'>
          be . nev . o . lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          adjective
        </Typography>
        <Typography variant='body2'>
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Fragment>
  );
}

function HomeCard() {
  const theme = useTheme();

  const HomeCardStyle: SxProps = {
    borderWidth: '0.15rem',
    borderStyle: 'solid',
    backgroundColor: 'black',
    opacity: '1',
    borderColor: 'primary.main',
    margin: '2rem',
  };
  return <Card sx={HomeCardStyle}>{TheCardContent()}</Card>;
}

export default HomeCard;

import {
  Card,
  CardContent,
  CardActions,
  Button,
  CardProps,
  styled,
  Typography,
} from '@mui/material';
import { Fragment } from 'react';

const HomeCardStyled = styled(Card)<CardProps>(({ theme }) => ({
  borderWidth: '0.15rem',
  borderStyle: 'solid',
  borderColor: theme.palette.primary.main,
  margin: '2rem',
}));

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
  return <HomeCardStyled>{TheCardContent()}</HomeCardStyled>;
}

export default HomeCard;

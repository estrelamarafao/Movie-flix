import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

interface MovieCardProps {
  movie: {
    image_url: string;
    title: string;
    year: string;
    crew: string;
    rating: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => (
  <Card sx={{ maxWidth: 170, margin: 2, borderRadius: '20px', cursor: 'pointer' }}>
    <CardMedia component="img" height="140" image={movie.image_url} alt={movie.title} />
    <CardContent style={{display: 'flex', flexDirection: 'column', justifyContent: 'start'}}>
      <Typography gutterBottom style={{fontWeight: 'bold'}} component="div">
        {movie.title}
      </Typography>
      <Typography gutterBottom typography='span' style={{fontSize: '12px'}} component="div">
        Ano de lançamento: {movie.year}
      </Typography>
      <Typography gutterBottom typography='span' style={{fontSize: '12px'}} component="div">
        {movie.crew}
      </Typography>
      <div style={{padding: '6px', width: '70px', borderRadius: '20px', display: 'flex', textAlign: 'center', color: 'white', background: '#726BEACC'}}>
      <svg  style={{paddingRight: '8px'}} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99992 1.03577L10.0599 5.2091L14.6666 5.88243L11.3333 9.1291L12.1199 13.7158L7.99992 11.5491L3.87992 13.7158L4.66659 9.1291L1.33325 5.88243L5.93992 5.2091L7.99992 1.03577Z" fill="white" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
        {movie.rating}/10
      </div>
    </CardContent>
  </Card>
);


export default MovieCard;


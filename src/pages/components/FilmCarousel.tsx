import React from 'react'; 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

const FilmCarousel: React.FC = () => {
  // Função para gerar os itens dos filmes
  const generateFilmItems = () => {
    return [...Array(12)].map((_, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Box sx={{ position: 'relative', height: '200px', width: '100%' }}>
          <Image 
            src={`/images/film${index + 1}.jpg`} 
            alt={`Filme ${index + 1}`} 
            layout="fill" 
            objectFit="cover"
          />
        </Box>
      </Grid>
    ));
  };

  return (
    <Box sx={{ flexGrow: 1, padding: '16px' }}>
      <Grid container spacing={2}>
        {generateFilmItems()}
      </Grid>
    </Box>
  );
};

export default FilmCarousel;

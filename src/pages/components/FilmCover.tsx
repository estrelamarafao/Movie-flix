import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';

const FilmCover: React.FC = () => {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        height: 'auto', 
        position: 'relative',
        marginBottom: '7'
      }}
    >
      <Image 
        src="/path/to/your/film-cover.jpg" 
        alt="Capa do Filme" 
        layout="responsive"
        width={1920} // Largura da imagem
        height={800} // Altura da imagem
        style={{ objectFit: 'cover' }} // Ajusta a imagem para cobrir o contêiner
      />
    </Box>
  );
};

export default FilmCover;

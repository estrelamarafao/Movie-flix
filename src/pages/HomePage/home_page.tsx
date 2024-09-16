import React from 'react';
import MyAppBar from '../components/AppBar';
import FilmCover from '../components/FilmCover';
import FilmCarousel from '../components/FilmCarousel';
import Footer from '../components/ Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <MyAppBar />
      <FilmCover /> { }
      <FilmCarousel /> 
      <Footer />
    </div>
  );
};

export default HomePage;

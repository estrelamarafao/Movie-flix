import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../pages/components/ Footer';
import MyAppBar from '../pages/components/AppBar';
import MovieCard from '../pages/components/MovieCard';

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultPages, setResultPages] = useState(0);

  const fetchMovies = async () => {
    axios.get(`https://movies.slideworks.cc/movies?limit=12&page=${currentPage}`)
    .then(response => {
      console.log(response)
      setMovies(response.data.data);
      setResultPages(response.data.pagination.maxPage)
    })
    .catch(error => {
      console.error("Erro ao buscar filmes:", error);
    });
  }

  useEffect(() => {
    fetchMovies()
  }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <MyAppBar />
      <div style={{width: '100%', height: '300px'}}>
        <img 
          src="https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6716_AL_.jpg" 
          alt="Logo" 
          style={{ minWidth: '100%', height: '300px', objectFit: 'cover' }} 
        />
      </div>
      <div className='movies-container'>
        {movies.map((movie: any, index: number) => (
          <MovieCard key={index} movie={{ ...movie }} />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
        {currentPage > 1 && (
          <button
            onClick={() => {
              setCurrentPage(currentPage - 1);
              fetchMovies();
            }}
            style={{ margin: '0 5px', padding: '10px 15px', backgroundColor: 'white', color: 'black', border: '1px solid #726BEA', borderRadius: '4px', cursor: 'pointer' }}
          >
            {currentPage - 1}
          </button>
        )}

        <button
          onClick={() => {
            setCurrentPage(currentPage);
            fetchMovies();
          }}
          style={{ margin: '0 5px', padding: '10px 15px', backgroundColor: '#726BEA', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          {currentPage}
        </button>

        {resultPages > currentPage && (
          <>
            <button
              onClick={() => {
                setCurrentPage(currentPage + 1);
                fetchMovies();
              }}
              style={{ margin: '0 5px', padding: '10px 15px', backgroundColor: 'white', color: 'black', border: '1px solid #726BEA', borderRadius: '4px', cursor: 'pointer' }}
            >
              {currentPage + 1}
            </button>
            {resultPages > currentPage + 2 && (
              <>
                <button
                  onClick={() => {
                    setCurrentPage(currentPage + 3);
                    fetchMovies();
                  }}
                  style={{ margin: '0 5px', padding: '10px 15px', backgroundColor: 'white', color: 'black', border: '1px solid #726BEA', borderRadius: '4px', cursor: 'pointer' }}
                >
                  ...
                </button>
              </>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;


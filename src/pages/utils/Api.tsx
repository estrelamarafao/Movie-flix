// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

const API_URL = 'https://movies.slideworks.cc';

export const fetchMovies = async (page: number = 1) => {
  try {
    const response = await axios.get(`${API_URL}/movies?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return null;
  }
};

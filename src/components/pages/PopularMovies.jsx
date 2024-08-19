import { useState, useEffect } from 'react';
import Movies from '../Movies';
import Header from '../Header';
import Footer from '../Footer';
import Loader from '../Loader';
import { POPULAR_MOVIES_URL } from '../../config/urls';

const PopularMovies = () => {
  const [popMovies, setPopMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const _URL = `${POPULAR_MOVIES_URL}&page=${page}`;

  async function getMovies(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) throw new Error('Error in Fetching requested URL');
      const data = await response.json();
      setPopMovies((prevMovies) => [...prevMovies, ...data.results]);
      setLoading(false);
    } catch (err) {
      console.log("An Error Occured", err);
    }
  };

  useEffect(() => {
    getMovies(_URL);
  }, [_URL]);

  // Infinite Scroll handler
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Clean up side effects
  }, [loading]);

  return (
    <>
      <Header></Header>
      <Movies moviesData={popMovies} ></Movies>
      {loading && <Loader></Loader>}
      <Footer></Footer>
    </>
  )
}

export default PopularMovies;


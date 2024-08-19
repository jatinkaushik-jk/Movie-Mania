import { useState, useEffect } from 'react';
import Movies from '../Movies';
import Header from '../Header';
import Footer from '../Footer';
import Loader from '../Loader';
import { TOP_RATED_MOVIES_URL } from '../../config/urls';


const TopRatedMovies = () => {
    const [topMovies, setTopMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const _URL = `${TOP_RATED_MOVIES_URL}&page=${page}`;

    async function getMovies(url) {
        try {
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) throw new Error('Error in Fetching requested URL');
            const data = await response.json();
            setTopMovies((prevMovies) => [...prevMovies, ...data.results]);
            setLoading(false);
        } catch (err) {
            console.log("An Error Ocurred", err);
        }
    };

    useEffect(() => {
        getMovies(_URL);
    }, [page, _URL]);

    // Infinite scroll handler
    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll); // Clean up side Effects
    }, [loading])


    return (
        <>
            <Header></Header>
            <Movies moviesData={topMovies} ></Movies>
            {loading && <Loader></Loader>}
            <Footer></Footer>
        </>
    )
}

export default TopRatedMovies;


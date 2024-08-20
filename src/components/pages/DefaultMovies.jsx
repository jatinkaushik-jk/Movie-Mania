import { useState, useEffect } from 'react';
import Movies from '../Movies';
import Header from '../Header';
import Footer from '../Footer';
import Loader from '../Loader';
import { DEFAULT_MOVIES_URL } from '../../config/urls';

const DefaultMovies = () => {
    const [defaultMovies, setDefaultMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true); // New state to track if there are more pages to load

    const _URL = `${DEFAULT_MOVIES_URL}&page=${page}`;

    async function getMovies(url) {
        if (!hasMore) return; // Stop fetching if no more pages
        try {
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) throw new Error('Error in Fetching requested URL');
            const data = await response.json();

            // Append new movies to the existing list
            setDefaultMovies((prevMovies) => [...prevMovies, ...data.results]);
            // Check if there are more pages left
            if (page >= data.total_pages) {
                setHasMore(false); // No more pages to load
            }
            setLoading(false);
        } catch (err) {
            console.log("An Error Ocurred", err);
        }
    }

    useEffect(() => {
        getMovies(_URL);
    }, [page, _URL]);

    // Infinite scroll handler
    const handleScroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500 && !loading) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Clean up side effects
    }, [loading]);

    return (
        <>
            <Header getSearched={(data) => setDefaultMovies(data)}></Header>
            <Movies moviesData={defaultMovies} isLoading={loading} ></Movies>
            {loading && <Loader></Loader>}
            <Footer></Footer>
        </>
    )
}

export default DefaultMovies;
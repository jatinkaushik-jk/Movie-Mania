import MobileNavbar from "../navigations/MobileNavbar.jsx";
import Footer from "../Footer.jsx";
import MovieCard from "../MovieCard.jsx";
import Loader from "../Loader.jsx";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IMG_PATH, API_KEY } from "../../config/urls.js";

const MovieDetailsPage = () => {


    const [MOVIE_ID, setMOVIE_ID] = useState(null);

    const [movieData, setMovieData] = useState({
        details: null,
        images: null,
        videos: null,
        credits: null,
        similarMovies: null,
    })
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (Object.keys(history.state).includes('usr')) {
            setMOVIE_ID((history.state.usr.movieID).toString());
        } else {
            throw new Error("Page Not Found");
        }
    }, []);

    useEffect(() => {

        setLoading(true);

        const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/${MOVIE_ID}?&api_key=${API_KEY}`;
        const MOVIE_IMAGE_URL = `https://api.themoviedb.org/3/movie/${MOVIE_ID}/images?&api_key=${API_KEY}`;
        const MOVIE_VIDEO_URL = `https://api.themoviedb.org/3/movie/${MOVIE_ID}/videos?&api_key=${API_KEY}`;
        const SIMILAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/${MOVIE_ID}/similar?&api_key=${API_KEY}`;
        const MOVIE_CREDITS_URL = `https://api.themoviedb.org/3/movie/${MOVIE_ID}/credits?&api_key=${API_KEY}`;

        async function getMovieData(url) {

            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error("Failed to fetch data");
                const data = await response.json();

                setMovieData((prevData) => {

                    if (url == MOVIE_IMAGE_URL) {
                        return { ...prevData, images: data.backdrops };
                    }
                    else if (url == SIMILAR_MOVIES_URL) {
                        return { ...prevData, similarMovies: data.results };
                    }
                    else if (url == MOVIE_VIDEO_URL) {
                        return { ...prevData, videos: data.results.filter((video) => (Object.values(video).includes('Trailer'))) }
                    }
                    else if (url == MOVIE_DETAILS_URL) {
                        return { ...prevData, details: data };
                    }
                    else if (url == MOVIE_CREDITS_URL) {
                        let director = data.crew.filter((person) => (person.department == 'Directing' && person.job == 'Director' && person.known_for_department == 'Directing'));

                        let writer = data.crew.filter((person) => (person.department == 'Writing' && person.job == 'Writer' && person.known_for_department == 'Writing'));

                        let producer = data.crew.filter((person) => (person.department == 'Production' && person.job == 'Producer' && person.known_for_department == 'Production'));

                        let character = data.cast.filter((person) => (person.known_for_department == 'Acting')).slice(0, 3);

                        if (writer.length == 0) {
                            writer = data.crew.filter((person) => (person.department == 'Writing' && person.job == 'Writer')).slice(0, 3);
                            if (writer.length == 0) {
                                writer = data.crew.filter((person) => (person.department == 'Writing')).slice(0, 3);
                            }
                        }
                        if (director.length == 0) {
                            director = data.crew.filter((person) => (person.department == 'Directing' && person.job == 'Director')).slice(0, 3);
                        }
                        if (producer.length == 0) {
                            producer = data.crew.filter((person) => (person.department == 'Production' && person.job == 'Producer')).slice(0, 3);
                            if (producer.length == 0) {
                                producer = data.crew.filter((person) => (person.department == 'Production' && person.job == 'Producer')).slice(0, 3);
                            }
                        }
                        return { ...prevData, credits: { director, writer, producer, character } };
                    }
                });

                setLoading(false);
            } catch (err) {
                console.error("Error fetching movie data:", err);
            }
        }

        MOVIE_ID && getMovieData(MOVIE_DETAILS_URL);
        MOVIE_ID && getMovieData(MOVIE_IMAGE_URL);
        MOVIE_ID && getMovieData(SIMILAR_MOVIES_URL);
        MOVIE_ID && getMovieData(MOVIE_VIDEO_URL);
        MOVIE_ID && getMovieData(MOVIE_CREDITS_URL);
    }, [MOVIE_ID]);

    return (
        <>
            <MobileNavbar className="border-b shadow-md shadow-[#eee] h-max pb-4 mb-10"></MobileNavbar>
            {loading && <Loader />}
            {movieData.details && <div className="mainDetails relative w-full h-max pb-10 text-white p-2 sm:p-4 bg-center bg-cover bg-[rgba(0,0,0,0.75)] bg-blend-multiply " style={{ backgroundImage: `url(${IMG_PATH + movieData.details.backdrop_path})` }}>
                {/* Movie Headings and more.. */}
                <div className="py-4">
                    <div className="text-4xl font-bold">{movieData.details.title}</div>
                    <div className="flex flex-row justify-between items-center p-1 text-xl text-[#ccc] mt-1">
                        <div>
                            {movieData.details.release_date} ● {Math.floor(movieData.details.runtime / 60) + "h " + (movieData.details.runtime - (Math.floor(movieData.details.runtime / 60) * 60)) + "m"}
                        </div>
                        <div className="text-md"><span className="font-bold text-2xl">⭐{movieData.details.vote_average.toFixed(1)}</span>/10</div>
                    </div>
                </div>

                <div className="w-full grid grid-rows-1 grid-cols-12 gap-y-6 gap-x-4 md:gap-y-10 ">
                    {/* Movie Poster */}
                    <div className="row-span-1 row-start-2 col-span-3 col-start-1 md:row-start-1">
                        <img className="w-full rounded" src={IMG_PATH + movieData.details.poster_path} alt="Movie Poster" />
                    </div>
                    {/* Movie Trailer */}
                    <div className="row-span-1 col-span-12 md:col-span-9">
                        {
                            (movieData.videos && movieData.videos.length !== 0) ? (<iframe name="Movie-Trailer" className="w-full h-full rounded aspect-video md:aspect-auto" src={movieData.videos ? `https://www.youtube.com/embed/${movieData.videos[0].key}?showinfo=0&controls=1&disablekb=1&fs=1&loop=1&color=white&rel=1` : ""} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen >
                            </iframe>)
                                : (!loading && <div className="w-full h-full flex justify-center items-center text-lg">Trailer Not Available !</div>)
                        }
                        {loading && <div className="w-full h-full flex justify-center items-center"><Loader /></div>}
                    </div>

                    <div className="row-span-1 col-span-9 col-end-13 md:col-span-12 ps-1">
                        {/* Movie Tags */}
                        <div className="movieTags mb-4 flex flex-wrap gap-2 md:gap-4">
                            {movieData.details.genres.map((tag, index) => {
                                return <span className="text-xs sm:text-base text-nowrap p-1 px-3 rounded-full border border-white text-center" key={index}>{tag.name}</span>
                            })}
                        </div>
                        {/* Movie Overview */}
                        <div className="sm:text-lg md:text-xl">{movieData.details.overview}</div>
                    </div>
                </div>

                {/* Movie Cast */}
                <div className="px-2">
                    <div className="movieCast mt-10">
                        <div className="text-3xl ">Movie Cast</div>
                        <table className="text-left mt-5 cursor-context-menu w-[95%] lg:w-[90%]">
                            <tbody className="w-full text-xs sm:text-sm md:text-base leading-5">
                                <tr className="border-b border-[#ccc] hover:bg-[rgba(0,0,0,0.5)] ">
                                    <th className="text-sm sm:text-lg tracking-wider sm:w-32 md:w-40 ps-2 sm:ps-4 p-4 py-3 sm:py-4">Director</th>
                                    <td>{movieData.credits && movieData.credits.director.map((person, index) => {
                                        return <span className="me-4 md:me-6" key={index}>{person.name}</span>
                                    })}</td>
                                </tr>
                                <tr className="border-b border-[#ccc] hover:bg-[rgba(0,0,0,0.5)]">
                                    <th className="text-sm sm:text-lg tracking-wider sm:w-32 md:w-40 ps-2 sm:ps-4 p-4 py-3 sm:py-4">Writer</th>
                                    <td>{movieData.credits && movieData.credits.writer.map((person, index) => {
                                        return <span className="me-4 md:me-6" key={index}>{person.name}</span>
                                    })}</td>
                                </tr>
                                <tr className="border-b border-[#ccc] hover:bg-[rgba(0,0,0,0.5)]">
                                    <th className="text-sm sm:text-lg tracking-wider sm:w-32 md:w-40 ps-2 sm:ps-4 p-4 py-3 sm:py-4">Producer</th>
                                    <td>{movieData.credits && movieData.credits.producer.map((person, index) => {
                                        return <span className="me-4 md:me-6" key={index}>{person.name}</span>
                                    })}</td>
                                </tr>
                                <tr className="border-b border-[#ccc] hover:bg-[rgba(0,0,0,0.5)]">
                                    <th className="text-sm sm:text-lg tracking-wider sm:w-32 md:w-40 ps-2 sm:ps-4 p-4 py-3 sm:py-4">Character</th>
                                    <td>{movieData.credits && movieData.credits.character.map((person, index) => {
                                        return <span className="me-4 md:me-6" key={index}>{person.name}</span>;
                                    })} <span>more..</span></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>}

            {/* Photos of the Movie */}
            {(movieData.images && movieData.images.length !== 0) && (<div className="photos w-full h-max pl-3 my-8 sm:my-16">
                <div className="text-3xl font-bold py-1">Photos</div>
                <div className="flex flex-row items-center gap-1">
                    <div className="overflow-x-scroll scroll-smooth w-[90%]" style={{ scrollbarWidth: "none" }}>
                        <div className="w-max flex flex-row gap-x-2 py-2">
                            {movieData.images && movieData.images.map((Image, index) => {
                                return (<div key={index}><img className="h-52 aspect-auto" src={IMG_PATH + Image.file_path} alt="movie related images" /></div>)
                            })}
                        </div>
                    </div>
                    <div><MdOutlineKeyboardArrowRight className="text-4xl" /></div>
                </div>
            </div>)}
            {/* Similar Movies List */}
            {(movieData.similarMovies && movieData.similarMovies.length !== 0) && (<div className="similarMovies w-full h-max pl-3 my-8 sm:my-16 mb-20 md:mb-32">
                <div className="text-3xl font-bold py-1">Similar Movies</div>
                <div className="flex flex-row items-center gap-1">
                    <div className="overflow-x-scroll scroll-smooth w-[90%]" style={{ scrollbarWidth: "none" }}>
                        <div className="w-max flex flex-row gap-x-4 py-2">
                            {movieData.similarMovies ? (movieData.similarMovies.map((movie, index) => {
                                return (<MovieCard key={index} movieData={movie}></MovieCard>);
                            }))
                                : (<Loader />)
                            }
                        </div>
                    </div>
                    <div><MdOutlineKeyboardArrowRight className="text-4xl" /></div>
                </div>
            </div>)}
            <Footer></Footer>
        </>
    )
}

export default MovieDetailsPage;
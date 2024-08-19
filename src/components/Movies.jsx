import MovieCard from './MovieCard.jsx';
import Loader from './Loader.jsx';

const Movies = ({ moviesData }) => {

    return (
        <main className="p-2 sm:p-4 lg:p-8 my-14 w-full ">
            <div className='flex justify-center items-center flex-wrap gap-6 mx-auto'>
                {moviesData ? moviesData.map((movie, index) => {
                    return <MovieCard key={index} movieData={moviesData[index]}></MovieCard>
                }) : <Loader></Loader>}
                {moviesData && moviesData.length === 0 && <div>No such Movie found!</div>}
            </div>
        </main>
    )
}

export default Movies;
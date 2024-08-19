import { useNavigate } from "react-router-dom";
import { IMG_PATH } from "../config/urls.js";

const MovieCard = ({ movieData }) => {

    const Navigate = useNavigate();

    function handleCardClick() {
        console.log(movieData.id);
        Navigate(`/movie/${movieData.title}`, { state: { movieID: movieData.id, movieName: movieData.title } });
        window.location.reload();
    }

    return (
        <div onClick={handleCardClick} className="group w-36 h-56 sm:w-40 sm:h-72 lg:w-52 lg:h-96 rounded-md bg-white overflow-hidden cursor-pointer shadow-[0_0_1rem_rgba(0,0,0,0.2)]">
            <div className="w-full h-4/5 overflow-hidden">
                <div className="w-full h-full relative bg-no-repeat bg-center bg-cover group-hover:bg-transparent transition-all duration-500 group-hover:scale-105 after:content-[''] after:absolute after:w-full after:h-full after:bg-[rgba(0,0,0,0.1)] after:top-0 after:left-0 after:z-[2] hover:after:bg-transparent after:transition-all" style={{ backgroundImage: `url(${IMG_PATH}${movieData.poster_path})` }} />
            </div>
            <div className="w-full h-1/5 flex sm:flex-row flex-col-reverse sm:items-center text-xs sm:text-base font-medium p-2 px-2 sm:gap-y-0 gap-y-[0.1rem]">
                <h5 className="w-full sm:w-3/5 leading-3">{movieData.title}</h5>
                <div className="rating text-nowrap w-full sm:w-2/5 sm:text-right">{movieData.vote_average.toFixed(1)} ⭐</div>
            </div>
        </div>
    )
}

export default MovieCard
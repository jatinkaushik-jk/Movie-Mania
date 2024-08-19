import { useRef, useEffect, useContext } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "./SearchContext";
import { DEFAULT_MOVIES_URL, SEARCH_URL } from "../../config/urls";

const Searchbar = ({ setSearched, wantLogo = true }) => {

    const searchInput = useRef();
    const Navigate = useNavigate();
    const { searchValue, setSearchValue } = useContext(SearchContext);

    async function getMovie(url) {
        const response = await fetch(url);
        const data = await response.json();
        setSearched && setSearched(data.results);
    };

    const handleSearchInput = (e) => {

        const _URL = `${SEARCH_URL}&query=`;

        const value = e.target.value;
        setSearchValue(value); // Update search value in state

        if (window.location.pathname !== '/') {
            Navigate('/');
        }
        if (value === '') {
            getMovie(DEFAULT_MOVIES_URL);
        } else {
            getMovie(_URL + e.target.value);
        }
    }

    // This useEffect will run once when the component mounts, restoring the search value.
    useEffect(() => {
        if (searchInput.current) {
            searchInput.current.value = searchValue; // Set the input value to the stored search value
        }
    }, [searchValue]);

    return (
        <div className="flex flex-row sm:gap-x-6 items-center w-full relative">
            <div className={wantLogo ? "" : `hidden`}><img src="/logo.svg" className="w-8 object-contain" alt="logo" /></div>
            <input value={searchValue} ref={searchInput} type="search" name="search" id="search" placeholder="Search movies" autoFocus className="bg-[#eee] rounded-md p-2 sm:pl-4 outline-none w-full h-12" onInput={handleSearchInput} />
            <div className="absolute right-2 sm:right-3 cursor-pointer"><HiOutlineSearch className="text-2xl font-semibold" /></div>
        </div>
    )
}

export default Searchbar
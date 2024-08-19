import Navbar from "./navigations/Navbar.jsx";
import CategoryNav from "./navigations/CategoryNav.jsx";
import SearchBar from "./navigations/SearchBar.jsx";
import MobileNavbar from "./navigations/MobileNavbar.jsx";

const Header = ({ getSearched }) => {

    const isSmallNavbar = (window.screen.width < '700') ? true : false;

    return (
        <header className="w-full border-b border-[--charcoal] shadow-md h-max">
            {isSmallNavbar ? <>
                <MobileNavbar passSearched={getSearched}></MobileNavbar>
                <CategoryNav></CategoryNav>
            </>
                :
                <>
                    <Navbar></Navbar>
                    <div className="w-4/5 lg:w-3/5 mx-auto my-10 mb-14 text-wrap">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 ps-14">Millions of Movies to Discover.<br />Explore now.</h3>
                        <SearchBar setSearched={getSearched}></SearchBar>
                    </div>
                    <CategoryNav></CategoryNav>
                </>}

        </header>
    )
}

export default Header
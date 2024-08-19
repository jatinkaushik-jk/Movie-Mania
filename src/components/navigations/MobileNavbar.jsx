import { useRef, useState } from "react";
import Searchbar from "./SearchBar";
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import CollabBtn from "../buttons/CollabBtn.jsx";

const MobileNavbar = ({ className, passSearched }) => {

    const [isOpen, setIsOpen] = useState(false);
    const menuNav = useRef();
    function handleMenuClick(e) {
        if (e.currentTarget.id === 'menu') {
            setIsOpen(true);
            menuNav.current.classList.remove('hidden');
            setTimeout(() => {
                menuNav.current.classList.remove('translate-y-[-100%]');
            }, 40);
        }
        else if (e.currentTarget.id === 'cross') {
            setIsOpen(false);
            menuNav.current.classList.add('translate-y-[-100%]');
            setTimeout(() => {
                menuNav.current.classList.add('hidden');
            }, 100);
        }
    }

    return (
        <>
            <nav className={`w-full h-max flex flex-row items-center justify-between gap-3 sm:gap-8 p-2 pt-4 px-4 sm:px-10 tracking-wide relative z-10 bg-white ${className}`}>
                <a id="logo" href="/"><img className="w-10 object-contain" src="/logo.svg" alt="logo" /></a>
                <div className="w-full">
                    <Searchbar wantLogo={false} setSearched={passSearched}></Searchbar>
                </div>
                <div>
                    {isOpen ?
                        (<RxCross2 id="cross" onClick={handleMenuClick} className="font-bolder text-4xl cursor-pointer" aria-label="Close menu" />)
                        : (<CgMenuRightAlt id="menu" onClick={handleMenuClick} className="text-4xl cursor-pointer" aria-label="Open menu" />)}
                </div>
                <div ref={menuNav} className="navlinks w-full h-max pb-4 bg-white flex flex-col items-center text-nowrap text-center font-semibold absolute left-1/2 translate-x-[-50%] top-full translate-y-[-100%] hidden ease-in-out transition-all duration-[1000] z-[-1] shadow-md border-b">

                    <div className="flex flex-col w-full sm:w-[80%]">
                        <a className="hover:bg-[#eee] py-4 transition duration-300 rounded" href="/">HOME</a>
                        <a className="hover:bg-[#eee] py-4 transition duration-300 rounded" href="https://github.com/jatinkaushik-jk/Movie-Mania" target="blank">GITHUB REPOSITORY</a>
                        <a className="hover:bg-[#eee] py-4 transition duration-300 rounded" href="https://github.com/jatinkaushik-jk/Movie-Mania" target="blank">DOCUMENTATION</a>
                        <a className="hover:bg-[#eee] py-4 transition duration-300 rounded" href="https://developer.themoviedb.org/reference/intro/getting-started" target="blank">API</a>
                    </div>

                    <CollabBtn className="w-full sm:w-[80%] p-4"></CollabBtn>
                </div>
            </nav>
        </>
    )
}

export default MobileNavbar
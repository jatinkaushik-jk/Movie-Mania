import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import CollabBtn from "./buttons/CollabBtn";

const Footer = () => {
    return (
        <footer className="w-full pb-4 mt-4 bg-[--charcoal] text-white overflow-x-hidden text-sm sm:text-base">
            <div id="ftop-section" className="flex flex-col gap-3 sm:gap-5 justify-evenly items-center">
                <div className="text-center w-full">
                    <div className="bg-[--charcoalLight] p-2 py-4 flex justify-center"><CollabBtn className="w-60 py-2 font-bold tracking-widest text-base sm:text-xl hover:bg-[#28353ea0]" ></CollabBtn></div>
                    <div id="fsocial-links" className="flex flex-row justify-center gap-8 text-2xl sm:text-3xl my-2 mt-6">
                        <a href="http://linkedin.com/in/jatinkaushik-jk" target="_blank" rel="noopener noreferrer" className="hover:text-[rgba(255,255,255,0.8)] transition-colors"><FaLinkedin /></a>
                        <a href="http://github.com/jatinkaushik-jk" target="_blank" rel="noopener noreferrer" className="hover:text-[rgba(255,255,255,0.8)] transition-colors"><FaGithub /></a>
                        <a href="https://behance.net/jatinkaushik-jk" target="_blank" rel="noopener noreferrer" className="hover:text-[rgba(255,255,255,0.8)] transition-colors"><FaBehanceSquare /></a>
                        <a href="https://instagram.com/jatinkaushik.jk" target="_blank" rel="noopener noreferrer" className="hover:text-[rgba(255,255,255,0.8)] transition-colors"><BsInstagram /></a>
                    </div>
                </div>
                <div id="fNav" className="w-full text-center text-base flex flex-row flex-wrap justify-center gap-2 sm:gap-x-4 md:gap-x-6 px-2">
                    <a href="/" rel="noopener noreferrer" className="hover:text-[rgba(255,255,255,0.75)] transition-colors text-nowrap flex flex-row flex-nowrap items-center gap-1" >MOVIES <MdArrowOutward /></a>
                    <a href="https://developer.themoviedb.org/reference/intro/getting-started" rel="noopener noreferrer" className="hover:text-[rgba(255,255,255,0.75)] transition-colors text-nowrap flex flex-row flex-nowrap items-center gap-1" >API <MdArrowOutward /></a>
                    <a href="https://github.com/jatinkaushik-jk/Movie-Mania" rel="noopener noreferrer" className="hover:text-[rgba(255,255,255,0.75)] transition-colors text-nowrap flex flex-row flex-nowrap items-center gap-1" >DOCUMENTATION <MdArrowOutward /></a>
                    <a href="https://github.com/jatinkaushik-jk/Movie-Mania" rel="noopener noreferrer" className="hover:text-[rgba(255,255,255,0.75)] transition-colors text-nowrap flex flex-row flex-nowrap items-center gap-1" >GITHUB REPOSITORY <MdArrowOutward /></a>
                </div>
                <div className="w-32 sm:w-40 md:w-48 my-4 sm:my-6"><img className="w-full" src="/assets/mmLogoWhite.svg" alt="logo white" /></div>
            </div>
            <div id="fbottom-section" className="text-center">
                <div>Movie Mania | By Jatin Kaushik</div>
                <div className="text-[#ccc] text-xs sm:text-sm pt-1">Source TMDB</div>
            </div>
        </footer>
    )
}

export default Footer
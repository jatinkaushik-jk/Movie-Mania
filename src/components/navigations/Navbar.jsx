import CollabBtn from "../buttons/CollabBtn";

const Navbar = () => {

    return (
        <nav className='w-full h-max flex flex-row items-center justify-between gap-4 p-2 pt-3 md:pt-4 px-4 md:px-6 lg:px-10 tracking-wide'>
            <a id="logo" className=" w-36 lg:w-40" href="/"><img className="w-full object-contain" src="./src/assets/mmLogo.svg" alt="mm Logo" /></a>
            <div className="navlinks flex flex-row items-center gap-x-6 lg:gap-x-8 text-nowrap font-semibold">
                <div className="flex flex-row gap-x-0 lg:gap-x-2 sm:text-xs md:text-sm lg:text-base">
                    <a className="hover:bg-[#eee] p-2 transition duration-300 rounded" href="/">HOME</a>
                    <a className="hover:bg-[#eee] p-2 transition duration-300 rounded" href="https://github.com/jatinkaushik-jk/Movie-Mania" target="blank">GITHUB REPOSITORY</a>
                    <a className="hover:bg-[#eee] p-2 transition duration-300 rounded" href="https://github.com/jatinkaushik-jk/Movie-Mania" target="blank">DOCUMENTATION</a>
                    <a className="hover:bg-[#eee] p-2 transition duration-300 rounded" href="https://developer.themoviedb.org/reference/intro/getting-started" target="blank">API</a>
                </div>
                <CollabBtn className="text-sm lg:text-base"></CollabBtn>
            </div>
        </nav>
    )
}

export default Navbar;
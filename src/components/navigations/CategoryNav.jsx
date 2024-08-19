import { NavLink } from "react-router-dom"

const CategoryNav = () => {
    return (
        <div className="w-full mt-2 flex flex-row flex-wrap items-center justify-center gap-3 text-[--charcoal] font-semibold pl-6 sm:pl-10">
            <NavLink to="/trending-movies" className={({ isActive }) => isActive ? "border-b-[0.15rem] transition-all border-[--charcoal] p-2 pb-2" : "border-b-[0.15rem] transition-all border-transparent hover:border-b-[0.15rem] hover:border-[--charcoal] p-2 pb-2"} >Trending</NavLink>
            <NavLink to="/popular-movies" className={({ isActive }) => isActive ? "border-b-[0.15rem] transition-all border-[--charcoal] p-2 pb-2" : "border-b-[0.15rem] transition-all border-transparent hover:border-b-[0.15rem] hover:border-[--charcoal] p-2 pb-2"} >Popular</NavLink>
            <NavLink to="/top-rated-movies" className={({ isActive }) => isActive ? "border-b-[0.15rem] transition-all border-[--charcoal] p-2 pb-2" : "border-b-[0.15rem] transition-all border-transparent hover:border-b-[0.15rem] hover:border-[--charcoal] p-2 pb-2"} >Top Rated</NavLink>
            <NavLink to="/upcoming-movies" className={({ isActive }) => isActive ? "border-b-[0.15rem] transition-all border-[--charcoal] p-2 pb-2" : "border-b-[0.15rem] transition-all border-transparent hover:border-b-[0.15rem] hover:border-[--charcoal] p-2 pb-2"} >Upcoming</NavLink>
        </div>
    )
}

export default CategoryNav
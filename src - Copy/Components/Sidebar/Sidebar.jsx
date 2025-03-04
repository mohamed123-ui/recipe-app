
import { GiMeal } from "react-icons/gi"
import logo from"../../assets/logo-BfNap0Pe.png"
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className=".container  w-[20%] fixed  h-[100vh]  sm:bg-slate-50 sm:shadow-xl">
       <button
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-800 sm:block md:hidden"
      >
        <FaBars  />
      </button>
      
<button data-collapse-toggle="navbar-default" type="button" className="inline-flex text-black items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:text-gray-950 dark:hover:bg-gray-950 dark:focus:ring-gray-950" aria-controls="navbar-default" aria-expanded="false" />
<div className="hidden w-full md:block md:w-auto" id="navbar-default">
<div className="mx-4">
      <img className="w-full mb-6 " src={logo} alt="logo" />
  <NavLink to={"/"} className="pt-2 pb-2 w-full font-[Pacifico] ps-3 pe-[96px]  hover:shadow-[#F29724]] hover:scale-[1.1]   mb-4 shadow-lg flex items-center gap-3 text-white   bg-[#F29724] rounded-lg"> <GiMeal />
  Meals</NavLink>
  <button className="pt-2 pb-2 w-full font-[Pacifico] ps-3 pe-[96px]  border  mb-4 flex items-center gap-3 text-black     rounded-lg"> <GiMeal />
  Ingredients</button>
  <button className="pt-2 pb-2 w-full font-[Pacifico] ps-3 pe-[96px]  border  mb-2 flex items-center gap-3 text-black    rounded-lg"> <GiMeal />
  Area</button>
      </div>
</div>

    
  </div>
    
  )
} 
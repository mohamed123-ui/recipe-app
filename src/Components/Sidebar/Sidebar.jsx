import { GiMeal } from "react-icons/gi";
import logo from "../../assets/logo-BfNap0Pe.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 h-[100vh] bg-slate-50 shadow-xl z-50 transition-all duration-300
      ${isMenuOpen ? "w-[60%]" : "w-0"} sm:w-[60%] md:w-[20%] md:block`}
    >
      {/* زر فتح القائمة */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute top-4 left-4 z-50 inline-flex items-center justify-center p-2 w-10 h-10 text-sm rounded-lg 
        hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-800 sm:block md:hidden"
      >
        <FaBars />
      </button>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full md:block transition-all duration-300`}
      >
        <div className="mx-4">
          <img className="w-full mb-6" src={logo} alt="logo" />

          <NavLink
            to={"/"}
            className="pt-2 pb-2 w-full font-[Pacifico] ps-3 pe-[96px] hover:scale-[1.1] mb-4 shadow-lg 
            flex items-center gap-3 hover:text-white hover:bg-[#F29724] rounded-lg"
          >
            <GiMeal /> Meals
          </NavLink>

          <button className="pt-2 pb-2 w-full font-[Pacifico] ps-3 pe-[96px] border mb-4 flex items-center gap-3 text-black rounded-lg">
            <GiMeal /> Ingredients
          </button>

          <NavLink
            to={"/area"}
            className="pt-2 pb-2 w-full font-[Pacifico] ps-3 pe-[96px] border mb-2 flex items-center gap-3 hover:text-white 
            hover:bg-[#F29724] hover:text-xl rounded-lg"
          >
            <GiMeal /> Area
          </NavLink>
        </div>
      </div>
    </div>
  );
}

import { NavLink } from "react-router-dom";

export default function Tabs() {
 
  return(
<div className="container py-9 border-b ">
<ul className="flex flex-wrap  w-full ">
  <li>
    <NavLink to={"/home"} className="p-3 text-[#4B5563] rounded-3xl  text-xl font-bold border font-[Comic] me-4 " > ALL</NavLink>
  </li>
  <li>
    <NavLink to={"/beef"} className="p-3 text-[#4B5563] rounded-3xl  text-xl font-bold border font-[Comic] me-4 " > Beef</NavLink>
  </li>

  <li>
    <a className="p-3 text-[#4B5563] rounded-3xl  text-xl font-bold border font-[Comic] me-4" href=""> BreakFast</a>
  </li>
  <li>
    <a className="p-3 text-[#4B5563] rounded-3xl  text-xl font-bold border font-[Comic] me-4" href=""> Chiken</a>
  </li>
  <li>
    <a className="p-3 text-[#4B5563] rounded-3xl  text-xl font-bold border font-[Comic] me-4" href=""> Dessert</a>
  </li>
  <li>
    <a className="p-3 text-[#4B5563] rounded-3xl  text-xl font-bold border font-[Comic] me-4" href=""> Goat</a>
  </li>
  <li>
    <a className="p-3 text-[#4B5563] rounded-3xl  text-xl font-bold border font-[Comic] me-4" href=""> Lamb</a>
  </li>
  <li>
    <a className="p-3 text-[#4B5563] rounded-3xl  text-xl font-bold border font-[Comic] me-4" href=""> Miscellaneous</a>
  </li>
  <li>
    <a className="p-3 text-[#4B5563] rounded-3xl  text-xl font-bold border font-[Comic] me-4" href=""> Pork</a>
  </li>
  <li>
    <a className="p-3 text-[#4B5563] rounded-3xl  text-xl font-bold border font-[Comic] me-4" href=""> SeaFood</a>
  </li>
  <li>
    <a className="p-3 text-[#4B5563] rounded-3xl  text-xl font-bold border font-[Comic] me-4" href=""> Side</a>
  </li>
  <li className="mt-6">
    <a className="p-3 text-[#4B5563] rounded-3xl  text-xl font-bold border font-[Comic] me-4 " href=""> Starter</a>
  </li>
  <li className="mt-6">

    <a className="p-3 text-[#4B5563] rounded-3xl  text-xl font-bold border font-[Comic]  me-4" href=""> Vegan</a>
  </li>
  <li className="mt-6">
    <a className="p-3 text-[#4B5563] rounded-3xl  text-xl font-bold border font-[Comic]  me-4" href=""> Vegetarian</a>
  </li>
</ul>
      
    </div>
    
  )

}
    /*
    
    */


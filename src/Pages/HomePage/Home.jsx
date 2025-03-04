import axios from "axios";
import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";

export default function Home() {
  


const [meals, setMeals] = useState([]); 
const [activeCategory, setActiveCategory] = useState("Beef"); 
const [categories, setCategories] = useState([]);

async function getMealsByCategory(CategoryName) {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${CategoryName}`
    );
    setMeals(response.data.meals);
  } catch (err) {
    console.error("Error fetching meals:", err);
  }
}

async function getCategories() {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    setCategories(response.data.categories);
  } catch (err) {
    console.error("Error fetching categories:", err);
  }
}

useEffect(() => {
  getMealsByCategory(activeCategory);
}, [activeCategory]);

useEffect(() => {
  getCategories();
}, []);

return (

  <div>
 <h1 className="text-3xl font-[Pacifico] py-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-800">
          Learn, Cook, Eat Your Food
        </h1>
    <div className="tabs container  py-4 hidden md:flex ">
      {categories.map((category) => (
        <button
          key={category.idCategory}
          className={
            category.strCategory === activeCategory
              ? "border p-2 rounded-3xl  text-white bg-black  text-xl pe-4 font-[Comic]"
              : "border flex   text-xl font-[Comic] p-2 rounded-3xl me-2 mb"
          }
          onClick={() => setActiveCategory(category.strCategory)}
        >
          {category.strCategory}
        </button>
      ))}
    </div>

    <div className="dropdown md:hidden py-4">
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className="border text-xl font-[Pacifico] p-2 rounded-lg w-full"
      >
        {categories.map((category) => (
          <option key={category.idCategory} value={category.strCategory}>
            {category.strCategory}
          </option>
        ))}
      </select>
    </div>

    <div className="row gap-3 w-full font[Pacifico]">
      {meals.map((meal) => (
        <div 
          key={meal.idMeal}
          className="recipe h-full  sm:w-full  md:w-[50%] lg:w-[20%] mx-auto bg-white rounded-xl text-center p-6"
        >
          <img
            className="rounded-full pb-3 w-full"
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
          <h3 className="font-[comic] font-bold text-xl mb-4">{meal.strMeal}</h3>
          <NavLink
            to={`/productdetails/${meal.idMeal}`}
            className="text-center  mt-3 hover:bg-green-700 text-white hover:cursor-pointer pt-2 pb-2 ps-5 pe-5 bg-green-400 rounded-xl"
          >
            View Details
          </NavLink>
        </div>
      ))}
    </div>
  </div>
);}
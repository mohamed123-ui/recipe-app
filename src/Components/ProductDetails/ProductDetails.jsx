import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Footer from "../Footer/Footer";
import { FaYoutube } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

export default function ProductDetails() {
  const [meals, setMeals] = useState([])
  const{idMeal} = useParams();
  console.log(idMeal);
   async function getMealsDetails(){
     await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`).then((response)=>{console.log(
      response.data,
      setMeals(response.data.meals)
    );
    }).catch((Err)=>{console.log(Err);
    })
  }
  useEffect(() => {
    getMealsDetails();
  }, [idMeal])
  
  return (
    <div className="py-3 px-3   bg-[#F4F2EE]">
{meals.map((meal)=>(
<div key={meal.idMeal} className="row gap-3" >
  <div className=" sm:w-full  lg:w-[30%]">
  <h1 className="font-[Pacifico] text-3xl font-bold mb-3">{meal.strCategory}</h1>

<img src={meal.strMealThumb} alt={meal.strCategory } className="w-full rounded-xl mb-5" />
<div className="flex gap-3">
<Link to={meal.strYoutube}>
  <div>
  <button className="flex items-center justify-center text-white bg-red-500 pt-2 pb-2 ps-5 pe-5 rounded-lg text-lg p">
  <FaYoutube />
YouTube
  </button>
  </div>
  </Link>
  <Link to={meal.strSource}>
  <div>
  <button className="flex items-center justify-center text-white bg-green-400 pt-2 pb-2 ps-5 pe-5 rounded-lg text-lg">
  <BiWorld />
  Source
  </button>
  </div>
  </Link>
</div>
  </div>
<div className="sm:w-full px-3  lg:w-[30%]">
<p>
  {meal.strInstructions}
</p>
</div>
<div className="sm:w-full  lg:w-[30%]">
<table className="p-5 bg-white rounded-lg">
  
  <tr>
    <td className=" font-[Pacifico] text-2xl mb-2 border-b-4 pb-3 w-full">Ingredients </td>
  </tr>
  <tr>
    <td>
{meal.strIngredient1}
    </td>
    <td>
{meal.strMeasure1}
    </td>
  </tr>
  <tr>
    <td>
{meal.strIngredient2}
    </td>
    <td>
{meal.strMeasure2}
    </td>
  </tr>
  <tr>
    <td>
{meal.strIngredient3}
    </td>
    <td>
{meal.strMeasure3}
    </td>
  </tr>
  <tr>
    <td>
{meal.strIngredient4}
    </td>
    <td>
{meal.strMeasure4}
    </td>
  </tr>
  <tr>
    <td>
{meal.strIngredient5}
    </td>
    <td>
{meal.strMeasure6}
    </td>
  </tr>
  <tr>
    <td>
{meal.strIngredient7}
    </td>
    <td>
{meal.strMeasure7}
    </td>
  </tr>
  <tr>
    <td>
{meal.strIngredient1}
    </td>
    <td>
{meal.strMeasure1}
    </td>
  </tr>
  
</table>
</div>
</div>

))}

    </div>
    
  )
}

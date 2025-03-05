import axios from 'axios';
import  { useEffect, useState } from 'react'
import { TiWorld } from 'react-icons/ti';
import { Link } from 'react-router-dom';

export default function Area() {


const [meals, setMeals] = useState([]); 
  const [country, setCountry] = useState("French");
  const [countries, setCountries] = useState([]);

  async function getMealCountry(country) {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
      );
      setMeals(response.data.meals || []);
      setCountry(country);
    } catch (error) {
      console.error("خطأ في جلب البيانات:", error);
    }
  }

  async function getCountries() {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      setCountries(response.data.meals || []);
    } catch (error) {
      console.error("خطأ في جلب قائمة الدول:", error);
    }
  }

  useEffect(() => {
    getMealCountry(country); 
  }, [country]);

  useEffect(() => {
    getCountries(); 
  }, []);

  return (
    <div>
      <div className="w-[100%] bg-[#F4F2EE] py-5 px-3 right-0 h-[100vh]">
        <h1 className="text-3xl font-[Pacifico] font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-800">
        The most famous dishes in the country
        </h1>
      
        <div className="mt-5 w-full  ">

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border cursor-pointer text-xl font-[Pacifico] p-2 rounded-lg w-full bg-white shadow-md"
          > 
            {countries.map((item, index) => (
              <option key={index} value={item.strArea}>
                {item.strArea}
              </option>
            ))}
          </select>
        </div>

        <div className="row gap-5 mt-5 bg-[#F4F2EE]">
          {meals.length > 0 ? (
            meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="meal bg-white p-4 sm:w-full md:w-[50%] lg:w-[20%] mx-auto rounded-3xl shadow"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full rounded-full transition-all"
                />
                <p className="mt-2 font-bold text-center">{meal.strMeal}</p>
                <div className="flex text-green-600 items-center justify-center">
                  <TiWorld />
                  <h3 className="text-center text-xl">{country}</h3>
                </div>
                <div className="flex justify-center items-center">
                  <Link
                    to={`/productdetails/${meal.idMeal}`}
                    className="text-center text-white hover:cursor-pointer mt-4 pt-2 pb-2 ps-5 pe-5 bg-green-400 rounded-xl"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center mt-5">❌ لا توجد وجبات متاحة لهذه الدولة.</p>
          )}
        </div>
      </div>
    </div>
  );
}

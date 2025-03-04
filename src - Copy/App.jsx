import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Mainlayout from "./Components/Mainlayout/Mainlayout"
import BeefPage from "./Pages/BeefPage/BeefPage.jsx";
import Home from "./Pages/HomePage/Home.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
import Chicken from "./Components/Chicken/Chicken.jsx";
export default function App() {
 const routes= createBrowserRouter([
{
  path:"",
  element:<Mainlayout />,

  children:[{index:true,element:(<Home />)},
    {path:"home",element:<Home/>},
    {path:"beef",element:<BeefPage />},
    {path:"productdetails/:idMeal",element:<ProductDetails />},
    {path:"/:chicken?", element:<BeefPage/> },
  
  ]
}
  ])
  
  return (<>
    <RouterProvider router={routes}/>
    
  </>
  )

}

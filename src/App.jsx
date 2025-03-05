import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Mainlayout from "./Components/Mainlayout/Mainlayout"
import BeefPage from "./Pages/BeefPage/BeefPage.jsx";
import Home from "./Pages/HomePage/Home.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
import Area from "./Pages/AreaCategory/Area.JSX";

export default function App() {
 const routes= createBrowserRouter([
{
  path:"",
  element:<Mainlayout />,

  children:[{index:true,element:(<Home />)},
    {path:"home",element:<Home/>},
    {path:"beef",element:<BeefPage />},
    {path:"productdetails/:idMeal",element:<ProductDetails />},
    {path:"area", element:<Area /> },

  
  ]
}
  ])
  
  return (<>
    <RouterProvider router={routes}/>
    
  </>
  )

}

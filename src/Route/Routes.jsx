import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Covarage from "../Pages/Covarage/Covarage";


export const router = createBrowserRouter([
        {
            path:"/",
            element: <Layout></Layout>,
            hydrateFallbackElement:<div>loading....</div>,
            children:[
                {
                  index:true,
                  element:<Home></Home> 
                },
                {
                  path:'/covarage',
                  element:<Covarage></Covarage>,
                  loader: () => fetch('/ServiceCenter.json').then(res => res.json())
                }
            ]
        }
 ])
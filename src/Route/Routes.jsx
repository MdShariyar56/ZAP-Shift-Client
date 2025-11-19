import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Covarage from "../Pages/Covarage/Covarage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Registe from "../Pages/Auth/Register/Registe";


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
        },
         {
        path:'/',
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: 'login',
            element:<Login></Login>
          },
          {
            path: 'register',
            element:<Registe></Registe>
          }
        ]
    }
 ])
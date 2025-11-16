import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";


export const router = createBrowserRouter([
        {
            path:"/",
            element: <Layout></Layout>,
            children:[
                {
                  index:true,
                  element:<Home></Home> 
                }
            ]
        }
 ])
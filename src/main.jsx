import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './componants/Roots';
import Home from './componants/Home';
import Login from './componants/Login';
import Register from './componants/Register';
import AuthProvider from './providers/AuthProvider';

import PrivetRouts from './Routs/PrivetRouts';

import EstateDettails from './componants/EstateDettails/EstateDettails';
import Error from './componants/Error/Error';
import Blogs from './componants/Blogs';
import { HelmetProvider } from 'react-helmet-async';
import UpdateProfile from './componants/UpdateProfile/UpdateProfile';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/Residantial.json')


      },
      {
        path: '/data/:id',
        element: <PrivetRouts><EstateDettails></EstateDettails></PrivetRouts>,
        loader: () => fetch('/Residantial.json')
      },

      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },

      {
        path: "/blog",
        element: <PrivetRouts><Blogs></Blogs></PrivetRouts>
      },
      {
        path:"/profile",
        element:<PrivetRouts><UpdateProfile></UpdateProfile></PrivetRouts>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>

        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)

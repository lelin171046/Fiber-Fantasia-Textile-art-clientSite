import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Error.jsx';
import Error from './Component/Error.jsx';
import NotFound from './Component/NotFound.jsx';
import Root from './assets/Layout/Root.jsx';
import SignIn from './Component/UserLogIn/SignIn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        path: '/home',
        element: <Home></Home>

      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

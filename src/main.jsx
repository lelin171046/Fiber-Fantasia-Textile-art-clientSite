import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import NotFound from './Component/NotFound.jsx';
import Root from './assets/Layout/Root.jsx';

import Home from './Component/Home.jsx';
import AllArt from './ArtAndCraft/AllArt.jsx';
import LogIn from './Component/UserLogIn/LogIn.jsx';
import AddItem from './Component/AddItem.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import MyArtAndCraft from './Component/MyArtAndCraft.jsx';
import SignUp from './Component/UserLogIn/SignUp.jsx';
import FirebaseProvider from './FireBase/FirebaseProvider.jsx';
import Update from './Component/Update.jsx';
import AboutUs from './Component/AboutUs.jsx';
import CraftAndArtDetails from './Component/CraftAndArtDetails.jsx';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/allart',
        element: <AllArt></AllArt>
      },
      {
        path: '/additem',
        element: <PrivateRoute>
          <AddItem></AddItem>
        </PrivateRoute>
      },
      {
        path: '/myart',
        element: <PrivateRoute><MyArtAndCraft></MyArtAndCraft></PrivateRoute>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/allart/details/:id',
        element: <PrivateRoute>
          <CraftAndArtDetails />
        </PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5001/allCraft/${params.id}`)
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <FirebaseProvider>
        <RouterProvider router={router} />
      </FirebaseProvider>
    </ChakraProvider>

  </React.StrictMode>,
)

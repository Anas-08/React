import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; 
import Home from '../src/components/Home.jsx'
import About from '../src/components/About.jsx'
import Contact from '../src/components/Contact.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },   
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <Header /> */}
    <RouterProvider router={router} />
  </>
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Academics from './pages/Academics';
import Faculty from './pages/Faculty';
import Admissions from './pages/Admissions';
import Students from './pages/Students';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<AboutUs/>
      },
      {
        path:"/gallery",
        element:<Gallery/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/academics",
        element:<Academics/>
      },
      {
        path:"/faculty",
        element:<Faculty/>
      },
      {
        path:"/admissions",
        element:<Admissions/>
      },
      {
        path:"/student-activities",
        element:<Students/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

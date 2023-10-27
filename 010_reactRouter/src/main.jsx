import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import User from './Components/User/User';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//     ]
//   },
// ]);


/* 
This is another method of writing the creteBrowserRouter
*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      {/* <Route path="contact" element={<Contact />} /> */}
      <Route path="user/:userid" element={<User />} />/
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/* 
RouterProvider takes one prop compulsarly to render the overall layout which we will make by using createBrowserRoute


createBrowserROute is used to create the path. Basically an array of all the route 

*/

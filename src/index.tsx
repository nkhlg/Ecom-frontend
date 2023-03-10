import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Components/Public/Home';
import Navbar from './Components/Public/Navbar';
import Profile from './Components/Public/Profile';
import AddProduct from './Components/Public/AddProduct';
const router = createBrowserRouter([
  { path: "/", element: <App/>, children: [
    { path: "/", element: <Navbar/>, children : [
      { path : "home" , element : <Home/>},
      { path : "profile" , element : <Profile/>},
      { path : "addproduct" , element : <AddProduct/>}
    ]},
  ]},
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

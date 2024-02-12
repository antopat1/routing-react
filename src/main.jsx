import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App.jsx";
import './index.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom";//necessaria per le operazioni di Routing
import About from "../pages/about.jsx"
import Contatti from "../pages/contatti.jsx";
import Cards from "../pages/cards.jsx";
import Card from "../pages/card.jsx";

import CardsChildren from "../pages/cardChildren.jsx";

import store from '../redux/store.jsx';
import { Provider } from 'react-redux';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
  },
  {
    path:"/about",
    element:<About></About>,
  },
  {
    path:"/contatti",
    element:<Contatti></Contatti>,
  },
  {
    path:"/cards",
    element:<Cards></Cards>,
  },
  {
    path:"/cards/:cardID",
    element:<Card/>,
  },
  {
    path:"/cards-children",
    element:<CardsChildren></CardsChildren>, 
    children:[
      {
        path:":cardID",
        element:<Card/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);





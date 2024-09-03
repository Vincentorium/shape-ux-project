import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import CustomRoute from './router/routers'
import { BrowserRouter as Router, RouterProvider } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <RouterProvider router={CustomRoute} />
);
reportWebVitals();

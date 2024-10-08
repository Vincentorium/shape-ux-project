import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import CustomRoute from './router/routers'
import { BrowserRouter as Router, RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Provider store={store}>
        <RouterProvider router={CustomRoute} />
    </Provider >
);
reportWebVitals();

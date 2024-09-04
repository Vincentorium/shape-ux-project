import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../page/Homepage'
import LearningLanguagePage from '../page/LearningLanguagePage'
import LearningArtPage from '../page/LearningArtPage'
import AdmissionPage from '../page/AdmissionPage'
import OnlineApplciationForm from '../page/OnlineApplciationForm'


import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const CustomRoute = createBrowserRouter([
    {
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "/learning/language",
        element: <LearningLanguagePage />,
    },
    {
        path: "/learning/art",
        element: <LearningArtPage />,
    }, {
        path: "/admission",
        element: <AdmissionPage />,
    },{
        path: "/application",
        element: <OnlineApplciationForm />,
    },
    {
        path: "/",
        element: <Navigate to="/home" replace />,
    }
    
]);


export default CustomRoute;
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../page/Homepage'
import LearningLanguagePage from '../page/LearningLanguagePage'
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
        path: "/",
        element: <Navigate to="/home" replace />,
    }
]);


export default CustomRoute;
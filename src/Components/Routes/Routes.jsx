import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import ErrorPage from '../ErrorPage/ErrorPage';
import Home from '../Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
            {
                index : true,
                path : '/',
                Component : Home
            },
        ]
  },
]);
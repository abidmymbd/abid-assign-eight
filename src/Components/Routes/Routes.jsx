import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import ErrorPage from '../ErrorPage/ErrorPage';
import Home from '../Home/Home';
import Appspage from '../AppsPage/Appspage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
            {
                index : true,
                loader: () => fetch ('appsData.json'),
                path : '/',
                Component : Home
            },
            {
              loader: () => fetch ('appsData2.json'),
              path : '/apps',
              Component : Appspage
            }
        ]
  },
]);
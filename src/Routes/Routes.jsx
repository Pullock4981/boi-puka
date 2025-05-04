import React from 'react';
// react router
import {
    createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import BookDetails from '../Pages/BookDetails/BookDetails';
import PageToRead from '../Pages/PageToRead/PageToRead';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch("booksData.json"),
                path: '/',
                Component: Home
            },
            {
                path: '/bookDetails/:bookId',
                loader: () => fetch("booksData.json"),
                Component: BookDetails
            },
            {
                path: '/pageToRead',
                Component: PageToRead
            }
        ],
    },
]);

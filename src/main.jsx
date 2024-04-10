import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import NotFoundPage from './pages/NotFoundPage';
import BookPage from './pages/BookPage';

import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <NotFoundPage msg="404! There doesn't seem to be anything here. Please leave."/>
  },
  {
    path: "/books",
    element: <BookListPage/>
  }, 
  {
    path: "/books/:bookId",
    element: <BookPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

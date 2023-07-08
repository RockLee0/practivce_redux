import {
    createBrowserRouter
  } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
    {
      path: "/login",
      element: <div>Hello LOGIN!</div>,
    },
    {
      path: "/home",
      element: <div>Hello HOME</div>,
    },
    {
      path: "*",
      element: <div>Not Found</div>,
    },
  ]);
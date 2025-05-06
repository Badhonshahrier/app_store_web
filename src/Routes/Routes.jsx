import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home";
import AppDetails from "../Pages/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/appStore.json"),
      },
      {
        path: "/app-details/:id",
        Component: AppDetails,
        loader: () => fetch("/appStore.json"),
      },
    ],
  },
]);

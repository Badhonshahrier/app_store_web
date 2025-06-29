import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home";
import AppDetails from "../Pages/AppDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import NotFound from "../Pages/NotFound";
import ContactUs from "../Components/ContactUs/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/appStore.json"),
        hydrateFallbackElement: (
          <div className="text-center">
            <span className="loading loading-spinner loading-xl"></span>
            <span className="loading loading-spinner loading-xl"></span>
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/app-details/:id",
        Component: AppDetails,
        loader: () => fetch("/appStore.json"),
      },
      {
        path: "/contactUs",
        Component: ContactUs,
        loader: () => fetch("/contactUS.json"),
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/profile",
    Component: Profile,
  },

  {
    path: "/*",
    Component: NotFound,
  },
]);

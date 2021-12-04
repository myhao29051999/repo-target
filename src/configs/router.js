// pages
import Home from "pages/Home";
import Dashboard from "pages/Admin/Dashboard";
import MovieDetail from "pages/Home/MovieDetail";

// configs
import { paths } from "./path";
export const mainRouter = [
  {
    path: paths.HOMEPAGE,
    exact: true,
    Component: Home,
  },
  {
    path: paths.MOVIE_DETAIL + ":maPhim",
    exact: false,
    Component: MovieDetail,
  },
];

export const adminRouter = [
  {
    path: paths.ADMINPAGE,
    exact: true,
    Component: Dashboard,
  },
];

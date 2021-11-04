// pages
import Home from "pages/Home";
import Dashboard from "pages/Admin/Dashboard";

// configs
import { paths } from "./path";
export const mainRouter = [
  {
    path: paths.HOMEPAGE,
    exact: true,
    Component: Home,
  },
];

export const adminRouter = [
  {
    path: paths.ADMINPAGE,
    exact: true,
    Component: Dashboard,
  },
];

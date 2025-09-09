import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Error from "../pages/error/Error";
import Layout from "../layout/Layout";
import Settings from "../pages/settings/Settings";

export type TeamRoute = RouteObject & {
  elementName: string;
  children?: TeamRoute[];
};

export const routes: TeamRoute[] = [
  {
    path: "/",
    elementName: "Layout",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        elementName: "Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/settings",
        elementName: "Settings",
        element: <Settings />,
      },
    ],
  },
];

export const teamsAppRoutes = createBrowserRouter(routes);

import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Error from "../pages/error/Error";
import Layout from "../layout/Layout";

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
    ],
  },
];

export const teamsAppRoutes = createBrowserRouter(routes);

import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Error from "../pages/error/Error";
import Layout from "../layout/Layout";
import Settings from "../pages/settings/Settings";
import KanbanBoards from "../pages/boards/KanbanBoards";
import Todos from "../pages/todos/Todos";
import ManageTeams from "../pages/settings/ManageTeams";
import ManageProfile from "../pages/settings/ManageProfile";

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
        path: "/todos",
        elementName: "Boards",
        element: <Todos />,
      },
      {
        path: "/boards",
        elementName: "Boards",
        element: <KanbanBoards />,
      },
      {
        path: "/settings",
        elementName: "Settings",
        element: <Settings />,
      },
      {
        path: "/settings/teams",
        elementName: "Settings",
        element: <ManageTeams />,
      },
      {
        path: "/settings/profile",
        elementName: "Settings",
        element: <ManageProfile />,
      },
    ],
  },
];

export const teamsAppRoutes = createBrowserRouter(routes);

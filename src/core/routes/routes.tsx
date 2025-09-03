import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Error from "../pages/error/Error";
import Layout from "../layout/Layout";
export const teamsAppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);

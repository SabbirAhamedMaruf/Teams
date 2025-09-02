import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "@/components/ui/provider";
import { RouterProvider } from "react-router-dom";
import { teamsAppRoutes } from "./routes/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={teamsAppRoutes} />
    </Provider>
  </StrictMode>
);

import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/cv-web",
    element: <Home />,
    errorElement: <Home />,
  }
]);
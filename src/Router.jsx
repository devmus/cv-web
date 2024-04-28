import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Home />,
    children:[
      {
        path: "/se",
        index: true,
        element: <Home />
      },
      {
        path: "/en",
        element: <Home />
      },
    ]
  }
]);
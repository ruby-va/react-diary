import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "add-note",
    element: <div>Add note</div>,
  },
]);

export default router;

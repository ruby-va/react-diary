import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home/Home";
import CreatePost from "@/pages/CreatePost/CreatePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "add-note",
    element: <CreatePost />,
  },
]);

export default router;

import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import AppState from "@/context/appState";

const App = () => {
  return (
    <div className="app">
      <AppState>
        <RouterProvider router={router} />;
      </AppState>
    </div>
  );
};
export default App;

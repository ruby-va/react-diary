import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Context } from "@/main";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";

const App = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    store.checkAuth();
  }, []);

  if (store.isLoading) {
    return (
      <h1
        style={{
          textAlign: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0",
        }}
      >
        Загрузка...
      </h1>
    );
  }

  return (
    <div className="app">
      <RouterProvider router={router} />;
    </div>
  );
};
export default observer(App);

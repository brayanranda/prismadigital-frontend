import * as React from "react";
import List from "./components/List/List";
import { AuthContext } from "./utils/contexts";
import { isUserLogedApi } from "./api/auth";
import { useState, useEffect } from "react";
import Home from "./page/Home/index";
// import { ToastContainer } from "react-toastify";

export default function App() {
  const [user, setUser] = useState(null);
  const [loadUser, setLoadUser] = useState(false);
  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false);

  useEffect(() => {
    setUser(isUserLogedApi());
    setRefreshCheckLogin(false);
    setLoadUser(true);
  }, [refreshCheckLogin]);

  if (!loadUser) return null;

  return (
    <AuthContext.Provider value={user}>
      {user ? (
        <List setRefreshCheckLogin={setRefreshCheckLogin} />
      ) : (
        <Home setRefreshCheckLogin={setRefreshCheckLogin} />
      )}
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      /> */}
    </AuthContext.Provider>
  );
}

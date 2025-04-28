// import { Route, Routes, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

/**
 * TODO
 * - Reroute user to /home if it's logged in otherwise reroute him to login page
 * - Use useNavigate hook https://reactrouter.com/en/6.26.0/hooks/use-navigate
 */
export const AppWrapper = () => {
  // const navigate = useNavigate();

  return (
    <Routes>
      <Route path={"/home"} element={<Home />} />
      <Route path={"*"} element={<Login />} />
    </Routes>
  );
};

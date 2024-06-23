import { Route, Routes } from "react-router-dom";
import LandingPage1 from "../pages/landing/landing.page1";
import Team from "../pages/team";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";


const RouterConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage1 />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/register" element={<Register />}></Route>

        <Route path="*" element={<p>Not found</p>}></Route>
      </Routes>
    </>
  );
};

export default RouterConfig;

import { Route, Routes } from "react-router-dom";
import LandingPage1 from "../pages/landing/landing.page1";
import Team from "../pages/team";

const RouterConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage1 />}></Route>
        <Route path="/team" element={<Team />}></Route>

        <Route path="*" element={<p>Not found</p>}></Route>
      </Routes>
    </>
  );
};

export default RouterConfig;

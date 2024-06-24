import { ReactNode } from "react";
import { FooterComponent, HeaderComponent } from "../../components/common";
import { Outlet } from "react-router-dom";

const Layout = (): ReactNode => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default Layout;

import Header from "../ui/Landing Page/header";
import { Outlet } from "react-router-dom";
import Footer from "../ui/Landing Page/footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

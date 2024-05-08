import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Layout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

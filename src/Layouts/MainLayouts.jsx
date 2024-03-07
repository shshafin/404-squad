import { Outlet } from "react-router-dom";

import Footer from "../Components/Footer/Footer";

import Menubar from "../Components/MenuBar/Menubar";
import { Toaster } from "react-hot-toast";

const MainLayouts = () => {
  return (
    <div>
      <Toaster></Toaster>
      <Menubar></Menubar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;

import { Outlet } from "react-router-dom";

import Menubar from "../Components/MenuBar/Menubar";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer/Footer";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
/>;

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

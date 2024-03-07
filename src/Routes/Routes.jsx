import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import EventInfo from "../Components/EventInfo/EventInfo";
import Home from "../Pages/Home/Home";
import AdhaMore from "../Components/EventInfo/EidAdha/AdhaMore";
import FitrMore from "../Components/EventInfo/EidFitr/FitrMore";
import Art from "../Pages/Art/Art";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Cal from "../Pages/Cal/Cal";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <EventInfo></EventInfo>,
      },
      {
        path: "/adhaMore",
        element: (
          <PrivateRoute>
            <AdhaMore></AdhaMore>
          </PrivateRoute>
        ),
      },
      {
        path: "/fitrMore",
        element: (
          <PrivateRoute>
            <FitrMore></FitrMore>
          </PrivateRoute>
        ),
      },
      {
        path: "/Art",
        element: (
          <PrivateRoute>
            <Art></Art>
          </PrivateRoute>
        ),
      },
      {
        path: "/Cal",
        element: <Cal></Cal>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Routes;

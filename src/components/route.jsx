import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/Landing/landingPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

export default route;

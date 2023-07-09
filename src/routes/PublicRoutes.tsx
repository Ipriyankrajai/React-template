import { Navigate } from "react-router-dom";
import Login from "../page/login";

import { PublicRouteType } from "../types/routes";

const PublicRoutes: PublicRouteType = [
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/",
    component: <Navigate to="/login" />,
  },
];

export default PublicRoutes;

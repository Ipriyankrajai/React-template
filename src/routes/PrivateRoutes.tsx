import Auth from "../page/auth/Auth";
import { PrivateRouteType } from "../types/routes";

const PrivateRoute: PrivateRouteType[] = [
  {
    path: "/auth",
    component: <Auth />,
    role: ["Owner"],
  },
];

export default PrivateRoute;

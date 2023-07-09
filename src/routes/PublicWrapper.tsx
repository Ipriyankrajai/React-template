import { Navigate, Outlet } from "react-router-dom";

const PublicWrapper = () => {
  const isLogin = false;
  return isLogin ? <Navigate to="/auth" /> : <Outlet />;
};

export default PublicWrapper;

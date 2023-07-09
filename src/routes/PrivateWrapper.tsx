import { Navigate, Outlet } from "react-router-dom";

const PrivateWrapper = () => {
  const isLogin = false;
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateWrapper;

import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoute from "./PrivateRoutes";
import PrivateWrapper from "./PrivateWrapper";
import PublicWrapper from "./PublicWrapper";

const RouterMain = () => {
  return (
    <Routes>
      <Route element={<PublicWrapper />}>
        {PublicRoutes?.map((item) => {
          return <Route path={item?.path} element={item?.component || null} />;
        })}
      </Route>
      <Route element={<PrivateWrapper />}>
        {PrivateRoute?.map((item) => {
          return <Route path={item?.path} element={item?.component || null} />;
        })}
      </Route>
      <Route path={"*"} element={<div>page not found</div>} />
    </Routes>
  );
};

export default RouterMain;

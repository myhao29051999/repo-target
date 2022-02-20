import React from "react";
import { Route, Redirect } from "react-router-dom";
import { paths } from "configs/path";

const auth = ({ path, Component }) => {
  return (
    <Route
      path={path}
      render={(routeProps) => {
        if (localStorage.getItem("userLogin")) {
          return <Component {...routeProps} />;
        }
        alert("Vui lòng đăng nhập!");
        return <Redirect to={paths.HOMEPAGE} />;
      }}
    ></Route>
  );
};

export default auth;

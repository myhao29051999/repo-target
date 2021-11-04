import React from "react";
import { Route } from "react-router-dom";
// components
// import Header from "../../components/Header";
import Header from "components/Header";
import Footer from "components/Footer";
// import Footer from "../../components/Footer";
function MainTemplate(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      {/* <Footer /> */}
    </>
  );
}

const RouterMainTemplate = ({ path, exact, Component }) => {
  return (
    <Route path={path} exact={exact}>
      <MainTemplate>
        <Component />
      </MainTemplate>
    </Route>
  );
};
export default RouterMainTemplate;

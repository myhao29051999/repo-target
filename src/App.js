import "./App.css";
// libraries
import { BrowserRouter, Switch } from "react-router-dom";

// routers
import { adminRouter, mainRouter } from "./configs/router";

// templates
import RouterMainTemplate from "templates/main";
import RouterAdminTemplate from "templates/admin";

// css
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-modal-video/scss/modal-video.scss";
import "reactjs-popup/dist/index.css";
function App() {
  const renderMainRouter = () => {
    return mainRouter.map(({ path, exact, Component }) => {
      return (
        <RouterMainTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterMainTemplate>
      );
    });
  };
  const renderAdminRouter = () => {
    return adminRouter.map(({ path, exact, Component }) => {
      return (
        <RouterAdminTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterAdminTemplate>
      );
    });
  };
  return (
    <>
      <BrowserRouter>
        <Switch>
          {renderMainRouter()}
          {renderAdminRouter()}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

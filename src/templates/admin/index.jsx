import React from "react";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./admin.css";

function AdminTemplate(props) {
  return (
    <>
      <main>
        <section>
          <div className="page-wrapper chiller-theme toggled">
            <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
              <i className="fas fa-bars" />
            </a>
            <nav id="sidebar" className="sidebar-wrapper">
              <div className="sidebar-content">
                <div className="sidebar-brand">
                  <a href="#">TIX MOVIE</a>
                  <div id="close-sidebar">
                    <i className="fas fa-times" />
                  </div>
                </div>
                <div className="sidebar-header">
                  <div className="user-pic">
                    <img
                      className="img-responsive img-rounded"
                      src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                      alt="User picture"
                    />
                  </div>
                  <div className="user-info">
                    <span className="user-name">
                      Jhon
                      <strong>Smith</strong>
                    </span>
                    <span className="user-role">Administrator</span>
                    <span className="user-status">
                      <i className="fa fa-circle" />
                      <span>Online</span>
                    </span>
                  </div>
                </div>
                {/* sidebar-header  */}
                <div className="sidebar-search">
                  <div>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control search-menu"
                        placeholder="Search..."
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fa fa-search" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* sidebar-search  */}
                <div className="sidebar-menu">
                  <div className="row">
                    <div className="col-3">
                      <div
                        className="nav flex-column nav-pills"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <NavLink to="/admin/dashboard" exact={true}>
                          Dashboard
                        </NavLink>
                        <NavLink to="/admin/movie">Movie</NavLink>
                        <NavLink to="/admin/user">User</NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                {/* sidebar-menu  */}
              </div>
              {/* sidebar-content  */}
              <div className="sidebar-footer">
                <a href="#">
                  <i className="fa fa-bell" />
                  <span className="badge badge-pill badge-warning notification">
                    3
                  </span>
                </a>
                <a href="#">
                  <i className="fa fa-envelope" />
                  <span className="badge badge-pill badge-success notification">
                    7
                  </span>
                </a>
                <a href="#">
                  <i className="fa fa-cog" />
                  <span className="badge-sonar" />
                </a>
                <a href="#">
                  <i className="fa fa-power-off" />
                </a>
              </div>
            </nav>
            {/* sidebar-wrapper  */}
            <main className="page-content">
              {" "}
              <section> {props.children}</section>
            </main>
          </div>
        </section>
        {/* <section> {props.children}</section> */}
      </main>
    </>
  );
}
const RouterAdminTemplate = ({ path, exact, Component }) => {
  return (
    <Route path={path} exact={exact}>
      <AdminTemplate>
        <Component />
      </AdminTemplate>
    </Route>
  );
};
export default RouterAdminTemplate;

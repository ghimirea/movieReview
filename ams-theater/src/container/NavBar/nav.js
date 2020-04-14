import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import ImageRab from "../Imag/imgControler";
import importComponent from "../../HOC/asynchComponent";

import logo from "../../moviejpg.jpg";
import Login from "../SignInSignUp/Login";
import Com from "../movie/contSingal";


import { connect } from "react-redux";
import Singal from "../movie/singalMoview";
// import Login from "../SignInSignUp/Login";

const asycNewmovie = importComponent(() => {
  return import("../NewMovie/NewMovie");
});

class Nav extends Component {
  render() {
    this.props.adminfunc();
    return (
      <div>
        <header>
          <nav className="   btn btn-warning disabled navbar navbar-expand-lg navbar-dark bg-dark">
            <Link class=" text-warning navbar-brand" to="/">
              <img
                src="https://cdn2.iconfinder.com/data/icons/picons-basic-3/57/basic3-055_video_recording_hd-512.png"
                width="40"
                height="50"
                alt="movies.com"
              />{" "}
              Movies-4YOU
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className=" container collapse navbar-collapse"
              id="navbarColor02"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    <span class="sr-only">(current)</span>
                  </Link>
                </li>
                {this.props.adminLoging === true ? (
                  <li className="nav-item">
                    <Link className="nav-link" to="/add-new-movie">
                      {" "}
                      ADD-New-Movies{" "}
                    </Link>
                  </li>
                ) : null}
                <li className="nav-item">
                  <Link className="nav-link" to=" ">
                    TOP-Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse">
              <Link className="btn btn-outline-success" to="/Singup">
                Singup
              </Link>
              <Link className=" btn btn-outline-success" to="/Login">
                Login
              </Link>
            </div>
          </nav>

          {
            <Switch>
              <Route exact path="/" component={ImageRab} />;
              <Route exact path="/add-new-movie" component={asycNewmovie} />;
              <Route exact path="/Login" component={Login} />;
              <Route exact path="/Ima/:id" component={Com} />
            </Switch>
          }
        </header>
      </div>
    );
  }
}

const mapstateToProps = (state) => {
  return {
    adminLoging: state.admin.admin,
  };
};

const mapstateDispatch = (dispatch) => {
  return {
    adminfunc: () => {
      dispatch({ type: "loginig" });
    },
  };
};

export default connect(mapstateToProps, mapstateDispatch)(Nav);

import React, { Component } from "react";
import { Route, Link, Switch, redirect } from "react-router-dom";

import "./Blog.css";
import AllMovies from "./Posts/Posts";
import importComponent from "../HOC/asynchComponent";

const asycNewmovie = importComponent(() => {
  return import("./NewMovie/NewMovie");
});

const asycFullpost = importComponent(() => {
  return import("./FullMovie/FullMovies");
});

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <li>
              <Link to="/">All Movies</Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/add-new-movie",
                  hash: "#submit",
                  search: "?quick-submit=true",
                }}
              >
                New Movie
              </Link>
            </li>
          </nav>
        </header>

        {/* <Route path="/" exact component={AllMovies} />
        <Switch>
          <Route path="/add-new-movie" exact component={asycNewmovie} />
          <Route path="/:mId" exact component={asycFullpost} />
        </Switch> */}
      </div>
    );
  }
}

export default Blog;

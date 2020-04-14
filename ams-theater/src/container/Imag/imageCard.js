import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Singale from "../movie/singalMoview";
import { withRouter } from "react-router";

import "./image.css";

const Image = (props) => {
  return (
    <div className=" con  thumbnail">
      <div className="  btn-outline-warning  card  ge">
        <img className="card-img-top" src={props.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Title {props.movieTitle}</h5>
          <p className="card-text">Movie Type {props.movieType}</p>
          <Link className="btn btn-outline-warning" to={`/Ima/${props.id}`}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Image);

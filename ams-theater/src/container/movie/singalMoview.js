import React from "react";
import { withRouter } from "react-router";
import Com from "../movie/contSingal";
import "./s.css";

const Singale = (props) => {
  console.log(props);
  console.log("from Singal");

  return (
    <div className="container ">
      <div className="ge ">
        <img className=" card-img-top" src={props.Mimg} />
        <div className="card-body">
          <h5 className="card-title">title {props.Mtitle}</h5>
          <p className="card-text">Type {props.Mtype}</p>
        </div>
      </div>
    </div>
  );
};

export default Singale;

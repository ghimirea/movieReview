import React, { Component } from "react";
import Axios from "axios";
import Image from "./imageCard";

import { connect } from "react-redux";
import { GetDatafromServer } from "../../Store/actions/action";

import "./image.css";

class ImageRab extends Component {
  componentDidMount() {
    this.props.show();
  }

  render() {
    // console.log(this.props.data);

    return (
      <div className=" con">
        {this.props.data.map((item) => {
          return (
            <Image
              key={item["_id"]}
              id={item["_id"]}
              movieTitle={item["movie_title"]}
              image={item.image}
              year={item.year}
              movieType={item["movie_type"]}
            />
          );
        })}
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  // console.log(state.movieReducer.data);
  return {
    move: state.movieReducer.movie,
    data: state.movieReducer.data,
  };
};

const mapStateDispatchToProps = (dispatch) => {
  return {
    show: () => dispatch(GetDatafromServer()),
  };
};

export default connect(mapStatetoProps, mapStateDispatchToProps)(ImageRab);

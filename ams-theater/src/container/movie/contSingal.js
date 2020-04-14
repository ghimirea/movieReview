import React, { Component } from "react";

import Axios from "axios";
import Com from "../coment/com";
import Singal from "../movie/singalMoview";

export default class contSingal extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(this.props.match.params.id);
    Axios.get(`/Detail/${id}`)
      .then((result) => {
        // console.log(result);
        const dataFromServer = result.data;
        // console.log(dataFromServer);
        // _id: "5e9603e8245c5c0398e31377";
        // movie_title: "home ";

        // year: 555;
        // movie_type: "Medical";
        // company: "Nickelodeon Movies";
        // director: "wdfdsf";
        // script_writer: "dfwf";
        // main_star: "wfewefwe";
        // co_star: "wewewewewe";
        // description: "wefwefwfwr";
        this.setState({
          ...this.state,
          img: dataFromServer.image,
          title: dataFromServer["movie_title"],
          type: dataFromServer["movie_type"],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  state = {
    img: null,
    title: null,
    type: null,
  };

  render() {
    return (
      <div>
        <Singal
          Mimg={this.state.img}
          Mtitle={this.state.title}
          Mtype={this.state.type}
        ></Singal>
        <Com />
      </div>
    );
  }
}

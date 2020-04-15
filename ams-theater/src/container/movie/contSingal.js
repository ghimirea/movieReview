import React, { Component } from "react";
import Axios from "axios";
import AddComment from "../coment/AddComment";
import Singal from "../movie/singalMoview";
import "./s.css";
import ShowComment from "../ShowComment/ShowComment";

export default class contSingal extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(this.props.match.params.id);
    Axios.get(`/Detail/${id}`)
      .then((result) => {
        const dataFromServer = result.data;
        this.setState({
          ...this.state,
          img: dataFromServer.image,
          title: dataFromServer["movie_title"],
          type: dataFromServer["movie_type"],
          year: dataFromServer.year,
          company: dataFromServer.company,
          director: dataFromServer.director,
          scriptWriter: dataFromServer["script_writer"],
          description: dataFromServer.description,
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
    year: null,
    company: null,
    director: null,
    scriptWriter: null,
    description: null,
  };

  render() {
    return (
      <div>
        <div className="NewMovie">
          <Singal
            Mimg={this.state.img}
            Mtitle={this.state.title}
            Mtype={this.state.type}
            Myear={this.state.year}
            Mcompany={this.state.company}
            Mdirector={this.state.director}
            MscriptWriter={this.state.scriptWriter}
            Mdescription={this.state.description}
          ></Singal>
        </div>
        <div>
          <ShowComment id={this.props.match.params.id} />
        </div>
        <div className=" left">
          <AddComment />
        </div>
      </div>
    );
  }
}

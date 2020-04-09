import React, { Component } from "react";
import axios from "axios";
// import axios from "../../axios";
import { Redirect } from "react-router-dom";
import "./NewMovie.css";

class NewMovie extends Component {
  state = {
    movie_title: "",
    image: "",
    year: "",
    movie_type: "",
    company: "",
    director: "",
    script_writer: "",
    main_star: "",
    co_star: "",
    description: "",
    newCreated: false,
  };

  postDatahandler = () => {
    const newMovie = {
      title: this.state.movie_title,
      image: this.state.image,
      year: this.state.year,
      type: this.state.movie_type,
      company: this.state.company,
      director: this.state.director,
      writer: this.state.script_writer,
      main_star: this.state.main_star,
      co_star: this.state.co_star,
      description: this.state.description,
    };

    axios.post("/create", newMovie).then((data) => {
      console.log(data);
      // console.log(this.state);
      // this.setState({
      //   newCreated: true,
      // });
      this.props.history.replace("/");
    });
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    let redirect = null;

    if (this.state.newCreated) {
      redirect = <Redirect to="/" />;
    }

    return (
      <div className="NewMovie">
        {redirect}
        <h1>Add a New Movie</h1>

        <label>Title</label>
        <input
          type="text"
          value={this.state.movie_title}
          onChange={(event) =>
            this.setState({ movie_title: event.target.value })
          }
        />

        <label>Image</label>
        <input
          type="text"
          value={this.state.image}
          onChange={(event) => this.setState({ image: event.target.value })}
        />

        <label>Year</label>
        <input
          type="number"
          value={this.state.year}
          onChange={(event) => this.setState({ year: event.target.value })}
        />

        <label>Type of Show</label>
        <select
          type="text"
          value={this.state.movie_type}
          onChange={(event) =>
            this.setState({ movie_type: event.target.value })
          }
        >
          <option value="Choose Type of Movie"></option>
          <option>Action</option>
          <option>Adventure</option>
          <option>Comedy</option>
          <option>Drama</option>
          <option>Horror</option>
          <option>Romantic</option>
        </select>

        <label>Recording Company</label>
        <select
          value={this.state.company}
          onChange={(event) => this.setState({ company: event.target.value })}
        >
          <option value="Choose Recording Company"></option>
          <option>Columbia Pictures</option>
          <option>Walt Disney</option>
        </select>

        <label>Name of Director</label>
        <input
          type="text"
          value={this.state.director}
          onChange={(event) => this.setState({ director: event.target.value })}
        />

        <label>Script Writer</label>
        <input
          type="text"
          value={this.state.script_writer}
          onChange={(event) =>
            this.setState({ script_writer: event.target.value })
          }
        />

        <label>Name of Main Star</label>
        <input
          type="text"
          value={this.state.main_star}
          onChange={(event) => this.setState({ main_star: event.target.value })}
        />

        <label>Name of Co-Star</label>
        <input
          type="text"
          value={this.state.co_star}
          onChange={(event) => this.setState({ co_star: event.target.value })}
        />

        <label>Detail</label>
        <textarea
          rows="4"
          value={this.state.description}
          onChange={(event) =>
            this.setState({ description: event.target.value })
          }
        />

        <button onClick={this.postDatahandler}>Add New Movie</button>
      </div>
    );
  }
}

export default NewMovie;

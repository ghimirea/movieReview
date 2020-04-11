import React, { Component } from "react"
import { Route, Link, Switch, Redirect } from "react-router-dom"
import ImageRab from "../Imag/imgControler"
import importComponent from "../../HOC/asynchComponent";



const asycNewmovie = importComponent(() => {
    return import("../NewMovie/NewMovie");
});




class Nav extends Component {

    render() {
        return (
            <div>
                <header>
                    <nav className="   btn btn-warning disabled navbar navbar-expand-lg navbar-dark bg-dark" >
                        <Link class=" text-warning navbar-brand" to="/">Movies-4YOU</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className=" container collapse navbar-collapse" id="navbarColor02">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/"><span class="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/add-new-movie">New-Movies </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to=" ">TOP-Movies</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="" >About</Link>
                                </li>
                            </ul>

                        </div>
                        <div className="collapse navbar-collapse">

                            <Link className="btn btn-outline-success" to="/Singup" >Singup</Link>


                            <Link className=" btn btn-outline-success" to="/Login" >Login</Link>

                        </div>
                    </nav>
                </header>
                {
                    <Switch>

                        <Route exact path="/" component={ImageRab} />
                        <Route exact path="/add-new-movie" component={asycNewmovie} />

                    </Switch>

                }
            </div>

        );
    }
}

export default Nav 
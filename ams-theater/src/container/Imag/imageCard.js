import React from "react"
import Singale from "../movie/singalMoview"
import { withRouter } from "react-router"
import { Route, Link, Switch } from "react-router-dom"

import "./image.css";


const Image = (props) => {
    return (
        <div className=" container thumbnail" >
            <div className="  btn-outline-warning  card  ge" >
                <img className="card-img-top" src="https://regalcdn.azureedge.net/Bloodshot/HO00010026/TV_SmallPosterImage/20200122-101641740.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}title</h5>
                    <p className="card-text">{props.p}Some quick example</p>
                    <Link to="/Ima/:id" className="btn btn-outline-warning">Details</Link>
                </div>
            </div>

            <Switch>
                <Route path="/Ima/:id" component={Singale} />
            </Switch>
        </div>

    )
}

export default withRouter(Image)
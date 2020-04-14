import React from "react"
import { Route, Link, Switch, Redirect } from "react-router-dom"
// import Singale from "../movie/singalMoview"
import { withRouter } from "react-router"
// import ImageRab from "../Imag/imgControler"


import "./image.css";


const Image = (props) => {
    return (
        <div className="  con  thumbnail" >
            <div className="  btn-outline-warning  card  ge" >
                <img className="card-img-top" src="https://regalcdn.azureedge.net/Bloodshot/HO00010026/TV_SmallPosterImage/20200122-101641740.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.mo}----title</h5>
                    <p className="card-text">{props.mo}Some quick example</p>
                    <Link className="btn btn-outline-warning" to="/Ima/"  >Details</Link>
                </div>
            </div>
            <div className="  btn-outline-warning  card  ge" >
                <img className="card-img-top" src="https://www.whoa.in/20150417-Whoa/London-Has-Fallen-Hollywood-Upcoming-Movies-HD-Poster.jpg" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}title</h5>
                    <p className="card-text">{props.p}Some quick example</p>
                    <Link className="btn btn-outline-warning" to="/Ima/"  >Details</Link>
                </div>

            </div>
            <div className="  btn-outline-warning  card  ge" >
                <img className="card-img-top" src="https://www.joblo.com/assets/images/oldsite/posters/images/full/pantherposterhandsmain_thumb.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}title</h5>
                    <p className="card-text">{props.p}Some quick example</p>
                    <Link className="btn btn-outline-warning" to="/Ima/"  >Details</Link>
                </div>

            </div>
            <div className="  btn-outline-warning  card  ge" >
                <img className="card-img-top" src="https://www.hypable.com/wp-content/uploads/2013/02/Iron-Man-3-International-Poster-HD.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}title</h5>
                    <p className="card-text">{props.p}Some quick example</p>
                    <Link className="btn btn-outline-warning" to="/Ima/"  >Details</Link>
                </div>

            </div>
            <div className="  btn-outline-warning  card  ge" >
                <img className="card-img-top" src="https://www.hypable.com/wp-content/uploads/2013/02/Iron-Man-3-International-Poster-HD.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}title</h5>
                    <p className="card-text">{props.p}Some quick example</p>

                    <Link className="btn btn-outline-warning" to="/Ima/" >Details</Link>
                </div>

            </div>

            {/* <Route exact path="/Ima/" component={Singale} /> */}
            {/* <Route  path={"/Ima"} component={Singale} />
           */}
        </div>

    )
}

export default withRouter(Image)
import React from "react"
import { withRouter } from "react-router"


const Singale = (props) => {
    // console.log(props)
    console.log("from Singal")
    return (
        <div>
            <img className="card-img-top" src="https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg" />
            <div className="card-body">
                <h5 className="card-title">title</h5>
                <p className="card-text">Some quick example</p>
            </div>
        </div>
    )

}


export default Singale

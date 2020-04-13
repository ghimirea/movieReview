import React, { Component } from "react"
import Axios from "axios"
import Image from "./imageCard"
import { withRouter } from "react-router"
import { connect } from "react-redux"
import {Actions} from "../../Store/actions/action"
import "./image.css";


class ImageRab extends Component {

    componentDidMount() {

    }


    render() {

        this.props.show()
        return (

            < div className="thumbnail  con"    >
                <Image mo={this.props.move} />
            </div >
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        move: state.movieReducer.movie
    }

}

const mapStateDispatchToProps = (dispatch) => {
    return {
        show: () => dispatch(Actions())
    }
}

export default connect(mapStatetoProps, mapStateDispatchToProps)(withRouter(ImageRab))


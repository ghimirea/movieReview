
const intialSate = {
    movie: " "

}

// state = { movie: "lord of te rings " }
// setstate={
//     movie :"ashim Movie "
// }


const RootReducer = (state = intialSate, action) => {
    if (action.type === "mov") {
        return {
            ...state,
            movie: "the new movie lord of  the rings from reducer after the function"
        }
    }

    return state
}

export default RootReducer
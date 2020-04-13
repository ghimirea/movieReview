const redux = require("redux")
const creatStore = redux.createStore
const initialState = {
    Data: "Movie"
}
const rootRedux = (state = initialState, action) => {
    if (action.type === "value") {
        return {
            ...state,
            Data: "after the action Movie "
        }
    } if (action.type === "new") {
        return {
            ...state,
            movie: "addd new one "
        }
    }

    return state
}

const store = creatStore(rootRedux)
console.log("befrore dis", store.getState())

store.dispatch({ type: "value", value: "name" })
console.log("after dis", store.getState())

store.dispatch({ type: "new" })
console.log("after new", store.getState())
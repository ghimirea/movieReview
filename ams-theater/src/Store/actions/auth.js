import * as actionTypes from './actionTypes';
//Action Creator
export const authStart = ()=> {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (data)=> {
    return {
        type: actionTypes.AUTH_SUCCESS,
        data:data
    };
};

export const authFail = (error)=> {
    return {
        type: actionTypes.AUTH_FAIL,
        error:error
    };
};

export const auth = (username, password) => {
    return dispatch => {
        dispatch(authStart());
    }
}
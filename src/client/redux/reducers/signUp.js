import * as actionTypes from '../actions/signUp/actionTypes';

export const initialState = {
    loading: false,
    error: null,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PAGE_LOADING:
            return {
                ...state,
                loading: true,
            }
            break;

        case actionTypes.PAGE_LOADED:
            
    }
}
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isSticky: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NAVIGATION_TOGGLE_STICKY:
            return {
            ...state,
            isSticky: action.isSticky,
        };
        default:
            return state;
    }
}

export default reducer;
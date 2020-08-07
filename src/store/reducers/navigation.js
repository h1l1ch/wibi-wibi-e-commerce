import * as actionTypes from '../actions/actionTypes';

const initialState = {
    showingBackdrop: false,
    // references: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REVEAL_BACKDROP:
            return {
                ...state,
                showingBackdrop: true 
            };
        case actionTypes.HIDE_BACKDROP:
            return {
                ...state,
                showingBackdrop: false 
            };
        // case actionTypes.ADD_REF:
        //     return {
        //         ...state,
        //         references: state.references.push(action.reference)
        //     };
        default:
            return state;
    }
}

export default reducer;
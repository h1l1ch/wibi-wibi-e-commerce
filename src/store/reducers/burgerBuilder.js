import * as actionTypes from "../actions/actionTypes";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false,
  purchasing: false,
  isVisible: false,
  isSticky: false
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CONTINUE_PURCHASING:
      return {
        ...state,
        purchasing: true,
      };
    case actionTypes.CANCEL_PURCHASING:
      return {
        ...state,
        purchasing: false,
      };
    case actionTypes.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true,
      };
    case actionTypes.REMOVE_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      };
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        totalPrice: 4,
        error: false,
        building: false,
      };
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.IS_NAVIGATION_VISIBLE:
      return {
        ...state,
        isVisible: action.isVisible,
      };
    case actionTypes.IS_NAVIGATION_STICKY:
      return {
        ...state,
        isSticky: action.isSticky,
      };
    default:
      return state;
  }
};

export default reducer;

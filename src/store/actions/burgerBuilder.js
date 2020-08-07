import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENTS,
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENTS,
    ingredientName: name,
  };
};

export const continuePurchasing = () => {
  return {
    type: actionTypes.CONTINUE_PURCHASING,
  };
};

export const cancelPurchasing = () => {
  return {
    type: actionTypes.CANCEL_PURCHASING,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const fetchIngredientsFailed = (ingredients) => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
    .get("https://react-burger-builder-a618c.firebaseio.com/ingredients.json")
    .then((response) => {
      dispatch(setIngredients(response.data));
    })
    .catch((error) => {
      dispatch(fetchIngredientsFailed(error));
    });
  };
};

export const makingNavigationVisible = (isNavigationVisible) => {
  return {
    type: actionTypes.IS_NAVIGATION_VISIBLE,
    isVisible: isNavigationVisible 
  };
};

export const makingNavigationSticky = (isSticky) => {
  return {
    type: actionTypes.IS_NAVIGATION_STICKY,
    isSticky: isSticky 
  };
};
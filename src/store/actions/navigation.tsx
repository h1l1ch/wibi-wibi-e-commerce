import * as actionTypes from './actionTypes';

export const navigationToggleSticky = (isSticky: boolean) : actionTypes.AppActions => {
    return {
      type: actionTypes.NAVIGATION_TOGGLE_STICKY,
      isSticky: isSticky 
    };
};




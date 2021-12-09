import { 
    createStore, 
    applyMiddleware, 
    combineReducers 
    // compose, 
} from 'redux';
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppActions } from './actions/actionTypes'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({ 
    // burgerBuilder: burgerBuilderReducer,
    // order: orderReducer,
    // auth: authReducer,
    // navigation: navigationReducer,
    // address: addressReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, 
    // composeEnhancers(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
// )
);

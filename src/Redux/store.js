import { combineReducers, legacy_createStore , applyMiddleware} from 'redux';
import {loginReducer} from './Login/Reducer'
import ReduxThunk from 'redux-thunk';
import { airportReducer } from './Airports/Reducer';
import { planReducer } from './Plans/Reducer';
const rootReducer = combineReducers({
    login : loginReducer, 
    airport : airportReducer, 
    plans : planReducer
});

export const store = legacy_createStore (
    rootReducer,
    applyMiddleware(ReduxThunk)
)
    // compose(
    //     applyMiddleware(ReduxThunk),
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //     )

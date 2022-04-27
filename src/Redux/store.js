import { combineReducers, createStore, applyMiddleware} from 'redux';
import {loginReducer} from './Login/Reducer'
import ReduxThunk from 'redux-thunk';
const rootReducer = combineReducers({
    login : loginReducer, 
});

export const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
)
// compose(
//     applyMiddleware(ReduxThunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

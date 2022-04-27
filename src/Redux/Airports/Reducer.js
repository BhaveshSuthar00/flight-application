import { ADDAIRPORT, LOADING } from "./Action";
const initialState = {
    airports : [],
    loading : false, 
}
export const airportReducer = (store = initialState, {type, payload}) => {
    switch(type) {
        case LOADING :
            return {...store, loading : payload};
        case ADDAIRPORT :
            return {...store, airports : payload, loading : false};
        default:
            return store;
    }
}
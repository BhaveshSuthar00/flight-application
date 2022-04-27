import { PLANSADD, LOADING } from './Action'
const initialState = {
    plans : [],
    loading : false,
}
export const planReducer = (store = initialState, {type, payload}) =>{
    switch(type) {
        case LOADING : 
            return {...store, loading: payload}
        case PLANSADD : 
            return {...store, plans : payload, loading : false}
        default:
            return store;
    }
}
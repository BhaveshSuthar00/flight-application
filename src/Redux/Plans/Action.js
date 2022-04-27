import axios from "axios";

const PLANSADD = "PLANSADD";
const LOADING = 'LOADING';
const planAdd = (data) => ({type : PLANSADD, payload : data});
const loading = (value)=> ({type : LOADING, payload : value});
const apiCallAdd = () => {
    return async (dispatch)=>{
        try {
            dispatch(loading(true));
            const req = axios.get('http://localhost:2200/plan/all');
            dispatch(planAdd(req.data));
        }
        catch (err) {
            
        }
    }
}
export {
    planAdd, PLANSADD, apiCallAdd,
    loading, LOADING
}
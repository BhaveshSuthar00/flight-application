import axios from "axios";

const PLANSADD = "PLANSADD";
const LOADING = 'LOADING';
const planAdd = (data) => ({type : PLANSADD, payload : data});
const loading = (value)=> ({type : LOADING, payload : value});
const apiCallAdd = (id) => {
    return async (dispatch)=>{
        try {
            dispatch(loading(true));
            const req = await axios.get(`https://flight-server-side.herokuapp.com/plan/${id}`);
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
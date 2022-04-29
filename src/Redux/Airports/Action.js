import axios from "axios";

const ADDAIRPORT = 'ADDAIRPORT';
const LOADING = 'LOADING'
const loading = (value) => ({type : LOADING, payload : value});
const addAirport = (data) => ({type : ADDAIRPORT, payload : data});
const apiCallAdd = ()=>{
    return async (dispatch)=>{
        try {
            dispatch(loading(true));
            const req = await axios.get('https://flight-server-side.herokuapp.com/airport/all');
            dispatch(addAirport(req.data))
        }
        catch(err) {

        }
    }
}
export {
    ADDAIRPORT, addAirport, apiCallAdd,
    loading, LOADING
}
import { LOAD_DATA_REQUEST,LOAD_DATA_SUCCESS,LOAD_DATA_FAILURE } from "../constants";
import Axios from "axios";

export const loadData = () => {
    return async(dispatch) => {
        try{
            dispatch({type: LOAD_DATA_REQUEST})
            let dataUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
            let response = await Axios.get(dataUrl)
            dispatch({type: LOAD_DATA_SUCCESS, payload:response.data.quotes})
        }
        catch(error){
            dispatch({type: LOAD_DATA_FAILURE, payload: error})
        }
    }
}
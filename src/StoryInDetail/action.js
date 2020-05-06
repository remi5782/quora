import * as actionTypes from './constants';
import axios from '../axios.config';
export const getStoryItem = (itemId)=> async (dispatch) => {
    dispatch({type: actionTypes.ITEM_LOADING});
    try{
        const response = await axios.get(`https://hn.algolia.com/api/v1/items/${itemId}`, {headers: {
            'Content-Type': 'application/json'}})
        dispatch({type: actionTypes.ITEM_SUCCESS, payload: response.data});
    }
    catch(err){
        dispatch({type: actionTypes.ITEM_FAILURE, payload: err})
    }
}

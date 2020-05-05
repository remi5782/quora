import * as actionTypes from './constants';
import axios from 'axios';
export const getStoryItem = (itemId)=> async (dispatch) => {
    dispatch({type: actionTypes.ITEM_LOADING});
    try{
        const response = await axios.get(`http://hn.algolia.com/api/v1/items/${itemId}`)
        dispatch({type: actionTypes.ITEM_SUCCESS, payload: response.data});
    }
    catch(err){
        dispatch({type: actionTypes.ITEM_FAILURE, payload: err})
    }
}

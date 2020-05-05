import * as actionTypes from './constants';
import axios from 'axios';
export const getStoryBookCollection = (query, tags,page)=> async (dispatch) => {
    dispatch({type: actionTypes.STORY_LOADING});
    try{
        const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}&tags=${tags}&page=${page}`)
        dispatch({type: actionTypes.STORY_SUCCESS, payload: response.data});
    }
    catch(err){
        dispatch({type: actionTypes.STORY_FAILURE, payload: err})
    }
}


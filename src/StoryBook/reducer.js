import * as actionTypes from './constants';
const initialState={
    storyCollection:[],
    error:{},
    isLoading: false
    
}
export default (state={}, action)=>{
    switch(action.type){
        case actionTypes.STORY_LOADING:
            return {isLoading: true,...state}
        case actionTypes.STORY_SUCCESS:
            return {...state, storyCollection:action.payload}
        case actionTypes.STORY_FAILURE:
            return {...state, isLoading: false, error: action.payload}
        default:
        return state;
    }
    
}
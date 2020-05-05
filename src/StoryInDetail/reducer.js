import * as actionTypes from './constants';
const initialState = {
    isLoading: false,
    errors: {},
    itemData:{
        id: 1,
    created_at: "",
    author: "",
    title: "",
    url: "",
    text: null,
    points: 0,
    parent_id: null,
    children: []
    }
    
}
export default (state = initialState,action )=>{
    switch(action.type){
        case actionTypes.ITEM_LOADING:
        return {...state, isLoading: true};
        case actionTypes.ITEM_SUCCESS:
        return {...state, isLoading: false, itemData: action.payload}
        case actionTypes.ITEM_FAILURE:
        return {...state, isLoading: false, errors: action.payload}
        default:
        return state;
    }
}
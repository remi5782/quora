import { combineReducers } from 'redux';
import StoryCollectionReducer from './StoryBook/reducer';

export default combineReducers({
   storyCollectionReducer: StoryCollectionReducer
})
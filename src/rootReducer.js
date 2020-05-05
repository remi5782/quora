import { combineReducers } from 'redux';
import StoryCollectionReducer from './StoryBook/reducer';
import StoryItemReducer from './StoryInDetail/reducer';

export default combineReducers({
   storyCollectionData: StoryCollectionReducer,
   storyItemData: StoryItemReducer
})
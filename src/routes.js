import React from 'react';
import { Switch, Route} from 'react-router-dom';
import StoryCollection from './StoryBook'; 
import StoryItem from './StoryInDetail'


const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={StoryCollection}/>
            <Route exact path="/storyItem/:id" component={StoryItem}/>
        </Switch>
    </div>
)

export default Routes;
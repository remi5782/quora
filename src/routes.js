import React from 'react';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import Loadable from 'react-loadable';
import Story from './StoryBook'; 
import StoryItem from './StoryInDetail'

// const AsyncDocumentation = Loadable({
//     loader: () => import('./components/Documentation/DocumentationNew'),
//     loading: () => <div></div>,
// });


const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Story}/>
            <Route exact path="/storyItem/:id" component={StoryItem}/>
            {/* <Route exact path='/story' component={Story}/> */}
        </Switch>
    </div>
)

export default Routes;
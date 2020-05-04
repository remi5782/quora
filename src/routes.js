import React from 'react';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import Loadable from 'react-loadable';

import Items from './components/Items/Items';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import requireAuth from './components/auth/requireAuth';
import Dashboard from './components/Dashboard/Dashboard';
import Diagrams from './components/Diagrams/Diagrams'
import requireNoAuth from './components/auth/requireNoAuth';
import ForgotPwd from './components/auth/ForgotPwd';
import ResetPwd from './components/auth/ResetPwd';
import Data from './components/Data/Data';
import DataBankVacant from './components/Data/DataBankVacant';
import DataView from './components/Data/dataviews/DataView';
import Landing from './components/Landing/Landing';
import CheckoutHistory from './components/Checkout/CheckoutHistory';
import DataActive from './components/Data/DataActive';
import DataActiveView from './components/Data/DataActiveView';
import UserProfile from './components/Users/UserProfile';
import NewCheckout from "./components/Data/dataviews/DataBankCheckout";

import DataStatisticsAdmin from './components/statistics/DataStatistics';
import DataStatisticsPublic from './components/statistics/DataStatisticsPublic';
import BasketEditor from './components/salesforce/BasketEditor';
import ErrorComponent from './components/ErrorComponent';
import TeamOnBoarding from './components/TeamOnBoarding';
import NewCheckoutHistory from "./components/DataBankCheckoutHistory";
import UtilityView from "./components/utility/UtilityView";
import MyTeam from "./components/teams/MyTeam";

const AsyncDocumentation = Loadable({
    loader: () => import('./components/Documentation/DocumentationNew'),
    loading: () => <div></div>,
});

const AsyncUserMgmt = Loadable({
    loader: () => import('./components/Users/UserMgmt'),
    loading: () => <div></div>,
});

const AsyncSettings = Loadable({
    loader: () => import('./components/Settings/Settings'),
    loading: () => <div></div>,
});

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Landing}/>
            
        </Switch>
    </div>
)

export default Routes;
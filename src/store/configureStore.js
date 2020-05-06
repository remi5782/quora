import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import _ from 'lodash';

const persistConfig = {
    key: 'root',
    storage,
}
//adding persistant Reducer (copy of reducer on the localStorage)
const persistedReducer = persistReducer(persistConfig, rootReducer)
//checking for preloaded state from SSR


const initialState = _.isEmpty( typeof window === 'object' ? window.__PRELOADED_STATE__ : {} )  ? {} : window.__PRELOADED_STATE__ ;
export default function configureStore() {

    const composeEnhancers =
        typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;
    let store = createStore(
        persistedReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
    let persistor = persistStore(store);
    return { store, persistor }
}
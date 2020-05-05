import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../rootReducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
}
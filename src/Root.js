import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from './store/configureStore';

export default ({ children }) => {
    const { store, persistor } = configureStore();

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>

        </Provider>
    )
}
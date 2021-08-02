import {combineReducers, configureStore} from '@reduxjs/toolkit'

import { tradingEnvironmentSlice } from './reducers/tradingEnvironmentSlice';

const reducers = combineReducers({
        tradingEnvironment:  tradingEnvironmentSlice.reducer
});

const store = configureStore({ reducer: reducers });

console.log(store.getState())

export default store;
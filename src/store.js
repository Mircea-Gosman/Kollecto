import {combineReducers, configureStore} from '@reduxjs/toolkit'

import { tradingEnvironmentSlice } from './reducers/tradingEnvironmentSlice';
import { socialPlatformSlice } from './reducers/socialPlatform';

const reducers = combineReducers({
        tradingEnvironment:  tradingEnvironmentSlice.reducer,
        socialPlatform: socialPlatformSlice.reducer
});

const store = configureStore({ reducer: reducers });

console.log(store.getState())

export default store;
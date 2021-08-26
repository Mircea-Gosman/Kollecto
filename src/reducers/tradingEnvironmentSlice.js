import { createSlice } from '@reduxjs/toolkit';

export const tradingEnvironmentSlice = createSlice({
    name: 'tradingEnvironment',
    initialState: {
        environment: "inventory"
    },
    reducers: {
        setTradingEnvironment: state => {
            if (state.environment === "market") {
                state.environment = "inventory";
            } else {
                state.environment = "market";
            }
        }
    }
});

export const { setTradingEnvironment } = tradingEnvironmentSlice.actions;
export const selectEnvironment = state => state.tradingEnvironment.environment;

export default tradingEnvironmentSlice.reducer;

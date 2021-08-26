import { createSlice } from '@reduxjs/toolkit';

export const socialPlatformSlice = createSlice({
    name: 'socialPlatform',
    initialState: {
        platform: {
            generic: "standby",
            specific: ""
        }
    },
    reducers: {
        setSocialPlatform: (state, action) => {
            state.platform = action.payload;
        }
    }
});

export const { setSocialPlatform } = socialPlatformSlice.actions;
export const selectSocialPlatform = state => state.socialPlatform.platform;

export default socialPlatformSlice.reducer;

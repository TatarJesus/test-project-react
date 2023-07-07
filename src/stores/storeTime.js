import { createSlice } from '@reduxjs/toolkit'

const stateTimeSlice = createSlice({
    name: 'currentTime',
    initialState: {
        time: {
            date: 0
        }
    },
    reducers: {
        updateTime(state, action) {
            state.time.date = action.payload;
        }
    }
});

export const {updateTime} = stateTimeSlice.actions;

export default stateTimeSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import currentTimeReducer from './storeTime';

export default configureStore({
    reducer: {
        currentTime: currentTimeReducer
    }
});
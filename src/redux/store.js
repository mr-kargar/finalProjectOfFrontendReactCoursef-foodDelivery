import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import foodReducer from './foodSlice';
import searchReducer from './searchSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        food: foodReducer,
        search : searchReducer,
    }
});

export default store;

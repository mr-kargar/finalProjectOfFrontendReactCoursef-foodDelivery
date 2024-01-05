import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import foodReducer from './foodSlice';
import searchReducer from './searchSlice';
import foodDetailsReducer from './foodDetailsSlice';
import cartReducer from './cartSlice';
import orderReducer from './orderSlice';

const store = configureStore({
    
    reducer: {
        user: userReducer,
        food: foodReducer,
        search : searchReducer,
        foodDetails : foodDetailsReducer,
        cart : cartReducer,
        order : orderReducer,
    }
});

export default store;

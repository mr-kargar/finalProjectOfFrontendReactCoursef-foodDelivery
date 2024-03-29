import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import foodReducer from "./foodSlice";
import searchReducer from "./searchSlice";
import foodDetailsReducer from "./foodDetailsSlice";
import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice";
import ordersReducer from "./ordersSlice";
import paymentReducer from "./paymentSlice";
import userInfoReducer from "./userInfoSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    food: foodReducer,
    search: searchReducer,
    foodDetails: foodDetailsReducer,
    cart: cartReducer,
    order: orderReducer,
    orders: ordersReducer,
    payment : paymentReducer,
    userInfo : userInfoReducer,
  },
});

export default store;

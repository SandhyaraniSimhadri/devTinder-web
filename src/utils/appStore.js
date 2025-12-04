//create a store calling configureStore method which is coming from toolkit. add reducer
// after creating the store, we need to provide this store to application
//store consists of slices
// it will replaces the values automatically. means updates happens automatically
import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./feedSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
  },
});
export default appStore;

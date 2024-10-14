import { configureStore } from "@reduxjs/toolkit";
import addReducer from './addslice'
const store = configureStore({
  reducer: {
    add: addReducer,
  },
});

export default store;
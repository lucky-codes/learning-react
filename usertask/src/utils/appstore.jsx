import { configureStore } from "@reduxjs/toolkit";
import addReducer from './addslice'
import taskReducer from './taskslice'
const store = configureStore({
  reducer: {
    add: addReducer,
    task:taskReducer
  },
});

export default store;
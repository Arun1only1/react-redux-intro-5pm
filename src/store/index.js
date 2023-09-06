import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});

export default store;

// algorithm
//  install react-redux and @reduxjs/toolkit
// create a store
// wrap App in main.jsx with this store using Redux provider
//create slice e.g.productSlice, userSlice, todoSlice, counterSlice
// to fetch data from redux store, we need useSelector function
// to change data in redux store, we must change it through useDispatch function and reducer function
// to pass value to redux store, we must use action.payload

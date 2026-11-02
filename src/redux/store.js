import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/todoSlice";


export default configureStore({reducer: {todos: reducer,}
});
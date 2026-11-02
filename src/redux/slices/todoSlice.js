
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todo",

  initialState: [
    {
      id: uuidv4(),
      description: "learn redux",
      isDone: false,
    },
  ],

  reducers: {
    addTask: (state, action) => {
      state.push({
        id: uuidv4(),
        description: action.payload,
        isDone: false,
      });
    },

    updateTask: (state, action) =>
      state.map((task) =>
        task.id === action.payload
          ? { ...task, isDone: !task.isDone }
          : task
      ),
  },
});

export const { addTask, updateTask } = todoSlice.actions;

export default todoSlice.reducer;
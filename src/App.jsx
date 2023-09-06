import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Counter from "./Counter";

function App() {
  return (
    <Box sx={{}}>
      <TodoForm />
      <TodoList />

      {/* <Counter /> */}
    </Box>
  );
}

export default App;

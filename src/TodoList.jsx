import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearTodoList, deleteItem } from "./store/todoSlice";

const TodoList = () => {
  const todoData = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  return (
    <Box sx={{ width: "30vw" }}>
      {todoData?.todoList.map((item) => {
        return (
          <ol
            key={item.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h4">{`${item.title} at ${item.date}`}</Typography>
            <Button
              variant="contained"
              onClick={() => dispatch(deleteItem(item.id))}
            >
              Remove
            </Button>
          </ol>
        );
      })}

      <Button
        variant="contained"
        onClick={() => {
          dispatch(clearTodoList());
        }}
      >
        Clear task
      </Button>
    </Box>
  );
};

export default TodoList;

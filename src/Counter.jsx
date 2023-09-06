import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCount,
  increaseCount,
  setRandomValue,
} from "./store/counterSlice";

const Counter = () => {
  // in redux we have two functions
  // 1 is useSelector to access state value
  // 2 is useDispatch to change state value through reducer function

  const counterState = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <Box sx={{ padding: "2rem", margin: "2rem", display: "flex", gap: "4rem" }}>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          dispatch(increaseCount());
        }}
      >
        +
      </Button>
      <Typography>{counterState.count}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(decreaseCount());
        }}
      >
        -
      </Button>
      <TextField
        type="number"
        onChange={(event) => {
          const value = event.target.value;
          dispatch(setRandomValue(value));
        }}
      />
    </Box>
  );
};

export default Counter;

import React from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "../../featurs/counter/counterSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const { value } = useSelector((state) => state.counter); // Example usage of useSelector

  const dispatch = useDispatch(); // Example usage of useDispatch

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleReset = () => dispatch(reset());

  const handleIncrementByAmount = () => dispatch(incrementByAmount(5));

  return (
    <Grid
      container
      sx={{ bgcolor: "grey.200", height: "100vh" }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <Stack gap={2} direction="row">
          <Button
            startIcon={<AddIcon />}
            aria-label="Increment value"
            onClick={handleIncrement}
          >
            Increment
          </Button>
          <Button
            aria-label="Increment value"
            onClick={handleIncrementByAmount}
          >
            Increment by 5
          </Button>
          <Typography variant="h2">{value}</Typography>
          <Button
            startIcon={<RemoveIcon />}
            aria-label="Decrement value"
            onClick={handleDecrement}
          >
            Decrement
          </Button>
          <Button aria-label="Reset value" onClick={handleReset}>
            Reset
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Counter;

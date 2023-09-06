import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import { getRandomId } from "./utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./store/todoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  return (
    <Box sx={{}}>
      <Formik
        initialValues={{ title: "", date: "" }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required."),
          date: Yup.string().required("Date is required."),
        })}
        onSubmit={(values) => {
          const randomId = getRandomId();
          values.id = randomId;

          dispatch(addItem(values));
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            style={{
              margin: "2rem",
              borderRadius: "10px",
              boxShadow:
                " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              width: "30%",
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
              gap: "2rem",
            }}
          >
            <Typography variant="h5">Add todo form</Typography>
            <TextField
              label="Title"
              required
              {...formik.getFieldProps("title")}
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="error-message">{formik.errors.title}</div>
            ) : null}

            <TextField
              label="Date"
              required
              {...formik.getFieldProps("date")}
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="error-message">{formik.errors.date}</div>
            ) : null}

            <Button type="submit" variant="contained" color="success">
              Add task
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default TodoForm;

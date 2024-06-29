import { Stack } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import { FC } from "react";
import { useToDosContext } from "../../context";
import TextField from "../shared/TextField";
import ToDoCheckBox from "../shared/ToDoCheckBox/ToDoCheckBox";

interface FormValues {
  title: string;
  completed: boolean;
}

const AddTaskField: FC = () => {
  const { onAddToDo } = useToDosContext();

  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    if (!values.title.trim()) return;

    onAddToDo({ title: values.title, completed: values.completed });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ title: "", completed: false }}
      onSubmit={handleSubmit}
    >
      <Form style={{ width: "100%" }}>
        <Stack
          width="100%"
          direction="row"
          borderRadius={1.5}
          sx={{ backgroundColor: (theme) => theme.palette.background.paper }}
          alignItems={"center"}
        >
          <ToDoCheckBox disabled />

          <TextField
            name="title"
            placeholder="Enter your todo here..."
            autoFocus
          />
        </Stack>
      </Form>
    </Formik>
  );
};

export default AddTaskField;

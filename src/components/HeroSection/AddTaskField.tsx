import { Stack } from "@mui/material";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { FC } from "react";
import { useToDosContext } from "../../context";
import ToDoCheckBox from "../shared/ToDoCheckBox/ToDoCheckBox";
import { StyledTextField } from "./styled";

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
        >
          <ToDoCheckBox disabled />

          <Field
            name="title"
            as={StyledTextField}
            placeholder="Enter your todo here..."
            autoFocus
            fullWidth
          />
        </Stack>
      </Form>
    </Formik>
  );
};

export default AddTaskField;

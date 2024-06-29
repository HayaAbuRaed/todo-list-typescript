import { Field } from "formik";
import { FC } from "react";
import { StyledTextField } from "./styled";
import { TextFieldProps } from "./types";

const TextField: FC<TextFieldProps> = (props) => {
  return <Field as={StyledTextField} fullWidth {...props} />;
};

export default TextField;

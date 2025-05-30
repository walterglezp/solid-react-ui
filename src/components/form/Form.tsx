import React from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import InputError from "./InputError";

export interface FormComponentProps
  extends React.FormHTMLAttributes<HTMLFormElement> {
  inline?: boolean;
  className?: string;
  error?: string;
}

export type ValidateProps = {
  noValidate?: boolean;
  required?: boolean;
  minStrLength?: number;
  maxStrLength?: number;
  type?: "number" | "text" | "email" | "password";
  minImages?: number;
  maxImages?: number;
  isImagesList?: boolean;
  fileSize?: number;
  dateTimePicker?: boolean;
  dateTimeRangePicker?: boolean;
  email?: boolean;
  phone?: boolean;
  integer?: boolean;
  isYoutubeUrl?: boolean;
};

export type FormFieldValueProps =
  | string
  | number
  | boolean
  | File
  | File[]
  | null
  | Array<string>;

export type FormFieldProps = {
  value: FormFieldValueProps;
  name: string;
  formName: string;
  error: string;
  section: number;
  validate: ValidateProps;
};

export type FormProps = {
  fields: { [key: string]: FormFieldProps };
  currentSection: number;
  errorMsg: string;
};
export type FormFieldChangeHandler = (field: FormFieldProps) => void;

const Form: React.FC<FormComponentProps> = ({
  inline = false,
  className = "",
  error = "",
  children,
  noValidate = true,
  ...rest
}) => {
  const classnames = generateClassnames({
    "d-flex": inline,
    [className]: !!className,
  });

  return (
    <>
      <form className={classnames} noValidate={noValidate} {...rest}>
        {children}
      </form>
      {error && <InputError error={error} />}
    </>
  );
};

export default Form;

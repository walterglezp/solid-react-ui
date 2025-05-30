import {
  FormFieldProps,
  FormFieldValueProps,
  FormProps,
} from "../components/form/Form";

export function validateOnChange(
  field: FormFieldProps,
  onChange: (field: FormFieldProps) => void
): boolean {
  //Validate
  const validatedField = validateInputField(field);
  if (validatedField.isValid) {
    onChange({ ...field, error: "" });
    return true;
  } else {
    onChange({ ...field, error: validatedField.error });
    return false;
  }
}

export const validateFormSection = (
  form: FormProps,
  section: number,
  onChange: (field: FormFieldProps) => void
): boolean => {
  for (const [, field] of Object.entries(form.fields)) {
    if (field.validate && field.section === section) {
      const isvalid = validateOnChange(field, onChange);
      if (!isvalid) {
        return false; //Stop  if there is an error
      }
    }
  }
  return true;
};

export const validateInputField = (
  field: FormFieldProps
): FormFieldValidatedResultProps => {
  const noErrors = { isValid: true, error: "" };
  //Check If Required
  if (field.validate.required) {
    const isInvalid = {
      isValid: false,
      error: "This field is required!",
    };
    if (isValueEmpty(field.value)) {
      return isInvalid;
    }
  }

  return noErrors;
};

export const isValueEmpty = (value: FormFieldValueProps): boolean => {
  return value === null || value === undefined || value === "" || value === 0;
};

export type FormFieldValidatedResultProps = {
  isValid: boolean;
  error: string;
};

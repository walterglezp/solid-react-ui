import {
  FormFieldProps,
  FormFieldValueProps,
  FormProps,
} from "../components/form/Form";

export function validateOnChange<T extends FormFieldProps>(
  field: T,
  onChange: (field: T) => void
): boolean {
  // Validate
  const validatedField = validateInputField(field);
  const updatedField = {
    ...field,
    error: validatedField.isValid ? "" : validatedField.error,
  };
  onChange(updatedField);
  return validatedField.isValid;
}

export function validateFormSection<T extends FormFieldProps>(
  form: FormProps,
  section: number,
  onChange: (field: T) => void
): boolean {
  for (const [, field] of Object.entries(form.fields)) {
    if (field.validate && field.section === section) {
      const isValid = validateOnChange(field as T, onChange);
      if (!isValid) return false;
    }
  }
  return true;
}

export function validateInputField(
  field: FormFieldProps
): FormFieldValidatedResultProps {
  const noErrors = { isValid: true, error: "" };

  // Check if required
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
}

export function isValueEmpty(value: FormFieldValueProps): boolean {
  return (
    value === null ||
    value === undefined ||
    value === "" ||
    value === 0 ||
    (Array.isArray(value) && value.length === 0) ||
    (value instanceof Date && isNaN(value.getTime()))
  );
}

export type FormFieldValidatedResultProps = {
  isValid: boolean;
  error: string;
};

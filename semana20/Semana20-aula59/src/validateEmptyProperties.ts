export const validateEmptyProperties = (
  input: any
): ValidateEmptyPropertiesOutput => {
  let errors: ValidateEmptyPropertiesError[] = [];
  for (const key in input) {
    if (input[key] !== false && !input[key]) {
      errors.push({
        key,
        value: input[key],
      });
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export interface ValidateEmptyPropertiesOutput {
  isValid: boolean;
  errors: ValidateEmptyPropertiesError[];
}

export interface ValidateEmptyPropertiesError {
  key: string;
  value: string;
}

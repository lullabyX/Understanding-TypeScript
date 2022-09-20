export interface ValidateObj {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

// general validation function
export function Validator(obj: ValidateObj) {
  let isValid = true;
  if (obj.required) {
    isValid = isValid && obj.value.toString().trim().length > 0;
  }
  if (obj.minLength && typeof obj.value === "string") {
    isValid = isValid && obj.value.length >= obj.minLength;
  }
  if (obj.maxLength && typeof obj.value === "string") {
    isValid = isValid && obj.value.length <= obj.maxLength;
  }
  if (obj.min && typeof obj.value === "number") {
    isValid = isValid && obj.value >= obj.min;
  }
  if (obj.max && typeof obj.value === "number") {
    isValid = isValid && obj.value >= obj.max;
  }
  return isValid;
}

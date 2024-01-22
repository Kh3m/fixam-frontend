import { wordCount } from "./words";

export const validateConfirmPassword = (
  password1: string,
  password2: string
) => {
  if (password1 !== password2) return "Passwords do not match";
  return true;
};

export const wordCountValidation = (value: string) => {
  if (wordCount(value) < 50) {
    return "Enter atleast 50 words.";
  }

  if (wordCount(value) > 250) {
    return "Not more than 250 words.";
  }

  return true; // validation passed
};

export const validateGeneralInternationalPhoneNumber = (value: string) => {
  // Validate international phone numbers with a plus sign and at least one digit
  const internationalRegex = /^\+\d+$/;
  return (
    internationalRegex.test(value) ||
    "Please enter a valid phone number starting with + followed by country code e.g +234"
  );
};

export const validateEmail = (email: string) => {
  if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email))
    return true;
  return "Enter a valid email address";
};

export const validateImage = (file: File) => {
  const acceptedTypes = ["image/jpeg", "image/png", "image/webp"];

  if (!file) {
    return "Please select an image.";
  }

  if (!acceptedTypes.includes(file.type)) {
    return "Invalid file type. Please choose a valid image (JPEG, PNG or WEBP).";
  }

  if (file.size > 5242880) {
    // 5MB limit
    return "File size exceeds the limit (5MB). Please choose a smaller image.";
  }

  return true; // Validation passed
};

export const wordCountValidation = (value: string) => {
  const words = value.trim().split(/\s+/);
  const wordCount = words.length;

  if (wordCount < 50) {
    return "Enter atleast 50 words.";
  }

  if (wordCount > 250) {
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

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

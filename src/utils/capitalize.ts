export default (words: string, split?: string): string =>
  words
    .split(split || " ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

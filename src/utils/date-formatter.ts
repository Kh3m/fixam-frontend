export const formatDateString = (date: string) => {
  const createdAt = new Date(date);
  const formattedDate = createdAt.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  });

  return formattedDate;
};

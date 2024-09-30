const dateFormat = (datetime: string | Date) =>
  new Date(datetime).toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default dateFormat;

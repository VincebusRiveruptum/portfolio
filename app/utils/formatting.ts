export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("es-CL", { dateStyle: "short" }).format(date);
};

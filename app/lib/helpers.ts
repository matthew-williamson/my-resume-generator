export const parseUSDateStringToDate = (dateString: string) => {
  const [monthStr, yearStr] = dateString.split("/");
  const month = parseInt(monthStr, 10);
  const year = parseInt(yearStr, 10);
  return new Date(year, month - 1);
};

export const formatDateToUSDateString = (date: Date) => {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${month.toString().padStart(2, "0")}/${year}`;
};

export const getPath = (str: string) =>
  str
    .split(" ")
    .map((item) => item.toLowerCase())
    .join("");
 
export const getPath = (str: string) =>
  str
    .split(" ")
    .map((item) => item.toLowerCase())
    .join("");
 
export const convertToString = (val: boolean) => {
  if (val === null || val === undefined) return "No information provided"

  if (val === true) {
    return "Yes"
  } else {
    return "No"
  }
} 

export const formatPhone = (str: string) => {
  if (!str) return null;
  if (str.includes("(") || str.includes("-")) return str
  return "(" + str.slice(0, 3) + ") " + str.slice(3, 6) + "-" + str.slice(6, str.length)
}
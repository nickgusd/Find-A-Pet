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
  const nums = "0123456789"
  if (!str) return null;  
  const numsOnly = str.split("").filter(item => nums.includes(item))

  if (numsOnly.length === 11) {
    numsOnly.shift()
  }

  return numsOnly.map((item, idx) => {
    if (idx === 0) {
      return "(" + item
    } else if (idx === 2) {
      return item + ") "
    } else if (idx === 5) {
      return item + "-"
    } else {
      return item
    }
  }).join("")
}
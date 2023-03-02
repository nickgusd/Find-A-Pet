export const getSearchTypes = (item: any) => {
  if (item === "Dogs") {
    return { type: "dog", page: "1" };
  } else if (item === "Cats") {
    return { type: "cat", page: "1" };
  } else if (item === "Rabbits") {
    return { type: "rabbit", page: "1" };
  } else if (item === "Horses") {
    return { type: "horse", page: "1" };
  } else if (item === "Birds") {
    return { type: "bird", page: "1" };
  } else {
    return { type: "barnyard", page: "1" };
  }
};

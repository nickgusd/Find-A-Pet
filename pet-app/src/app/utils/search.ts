export const getSearchParams = (params: any) => {
  const puppyTerms = ["puppy", "puppies", "pups"];
  const dogTerms = ["dog", "dogs", "doggies", "doggy", "doggys"];
  const catTerms = ["cats", "cat"];
  const kittenTerms = ["kitten", "kittens", "kitties"];

  if (puppyTerms.includes(params.type.toLowerCase())) {
    return { ...params, type: "dog", age: "baby" };
  }

  if (kittenTerms.includes(params.type.toLowerCase())) {
    return { ...params, type: "cat", age: "baby" };
  }

  if (dogTerms.includes(params.type.toLowerCase())) {
    return { ...params, type: "dog" };
  }

  if (catTerms.includes(params.type.toLowerCase())) {
    return { ...params, type: "cat" };
  }

  return params;
};
 
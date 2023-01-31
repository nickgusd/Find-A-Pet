import dogBreeds from "../config/dogbreeds.json";
import catBreeds from "../config/catbreeds.json";

const dogBreedsArr = dogBreeds.breeds.map((item) => {
  return { name: item.name.toLowerCase(), type: "dog" };
});

const catBreedsArr = catBreeds.breeds.map((item) => {
  return { name: item.name.toLowerCase(), type: "cat" };
});

const allBreeds = [...dogBreedsArr, ...catBreedsArr];

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

  const recursive = (arr1: any[], str: string): any => {
    const filter = arr1.filter(
      (item) =>
        item.name.includes(str.toLowerCase()) ||
        str.toLowerCase().includes(item.name)
    );
    if (filter.length) {
      return filter[0];
    } else {
      let newStr = str.slice(0, str.length - 1);
      return recursive(arr1, newStr);
    }
  };

  const exactMatch = allBreeds.find(
    (item) => item.name === params.type.toLowerCase()
  );

  if (exactMatch) {
    return { ...params, type: exactMatch.type, breed: exactMatch.name };
  }

  const recursiveSearch = recursive(allBreeds, params.type.toLowerCase());

  if (recursiveSearch) {
    return {
      ...params,
      type: recursiveSearch.type,
      breed: recursiveSearch.name,
    };
  }

  return params;
};

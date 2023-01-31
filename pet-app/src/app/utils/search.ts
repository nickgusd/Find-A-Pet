import dogBreeds from "../config/dogbreeds.json"

const dogBreedsArr = dogBreeds.breeds.map(item =>{
  return  item.name.toLowerCase();
});


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
    const filter = (arr1.filter(item => item.includes(str.toLowerCase()) || str.toLowerCase().includes(item)))
    if (filter.length) {
      return filter[0]
    } else {
      let newStr = str.slice(0, str.length - 1)
      return recursive(dogBreedsArr, newStr)
    }
  }

  if (recursive(dogBreedsArr, params.type.toLowerCase())) {
      return { ...params, type: "dog", breed: recursive(dogBreedsArr, params.type.toLowerCase())};
  }

  return params;
};
 

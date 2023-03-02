import dogBreeds from "../config/dogbreeds.json";
import catBreeds from "../config/catbreeds.json";
import horseBreeds from "../config/horsebreeds.json";
import birdBreeds from "../config/birdbreeds.json";
import rabbitBreeds from "../config/rabbitbreeds.json";
import barnyardBreeds from "../config/barnyardbreeds.json";

const dogBreedsArr = dogBreeds.breeds.map((item) => {
  return { name: item.name.toLowerCase(), type: "dog" };
});

const catBreedsArr = catBreeds.breeds.map((item) => {
  return { name: item.name.toLowerCase(), type: "cat" };
});

const rabbitBreedsArr = rabbitBreeds.breeds.map((item) => {
  return { name: item.name.toLowerCase(), type: "rabbit" };
});

const horseBreedsArr = horseBreeds.breeds.map((item) => {
  return { name: item.name.toLowerCase(), type: "horse" };
});

const birdBreedsArr = birdBreeds.breeds.map((item) => {
  return { name: item.name.toLowerCase(), type: "bird" };
});

const barnyardBreedsArr = barnyardBreeds.breeds.map((item) => {
  return { name: item.name.toLowerCase(), type: "barnyard" };
});


const allBreeds = [...dogBreedsArr, ...catBreedsArr, ...rabbitBreedsArr, ...horseBreedsArr, ...birdBreedsArr, ...barnyardBreedsArr];

export const getSearchParams = (params: any) => {
  const puppyTerms = ["puppy", "puppies", "pups", "puppys"];
  const dogTerms = ["dog", "dogs", "doggies", "doggy", "doggys"];
  const catTerms = ["cats", "cat"];
  const kittenTerms = ["kitten", "kittens", "kitties"];
  const rabbitTerms = ["rabbit", "rabbits", "bunnies", "bunny", "bunnys"]
  const birdTerms = ["birds", "bird", "parrot", "parrots"]
  const horseTerms = ["horses", "horse"]
  const barnTerms = ["goats", "goat", "pigs", "pig"]

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

  if (rabbitTerms.includes(params.type.toLowerCase())) {
    return { ...params, type: "rabbit" };
  }

  if (birdTerms.includes(params.type.toLowerCase())) {
    return { ...params, type: "bird" };
  }

  if (horseTerms.includes(params.type.toLowerCase())) {
    return { ...params, type: "horse" };
  }

  if (barnTerms.includes(params.type.toLowerCase())) {
    return { ...params, type: "barnyard" };
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

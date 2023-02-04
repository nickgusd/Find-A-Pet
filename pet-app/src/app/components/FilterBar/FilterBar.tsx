import { useState } from "react";
import { useNavigate, useLocation, createSearchParams } from "react-router-dom";

import DropdownClearable from "../DropDown/Dropdown";
import { selectBreeds } from "../../slice/breedsSlice";
import { selectTypes } from "../../slice/typesSlice";
import { useAppSelector } from "../../hooks";
import queryString from "query-string";

import styles from "./styles.module.css";

export const FilterBar = () => {
  const { breeds } = useAppSelector(selectBreeds);
  const { type } = useAppSelector(selectTypes);
  const navigate = useNavigate();
  const location = useLocation();
  const params = queryString.parse(location.search);
  const [breedValue, setBreedValue] = useState(params.breed);
  const [ageValue, setAgeValue] = useState(params.age);
  const [sizeValue, setSizeValue] = useState(params.size);
  const [genderValue, setGenderValue] = useState(params.gender);
  const [coatValue, setCoatValue] = useState(params.coat);
  const [colorValue, setColorValue] = useState(params.color);

  const breedOptions = breeds?.map((item: any, idx: any) => {
    return { key: idx + 1, text: item.name, value: item.name };
  });

  const colorOptions = type?.colors?.map((item: any, idx: any) => {
    return { key: idx + 1, text: item, value: item };
  });

  const coatOptions = type?.coats?.map((item: any, idx: any) => {
    return { key: idx + 1, text: item, value: item };
  });

  const genderOptions = type?.genders?.map((item: any, idx: any) => {
    return { key: idx + 1, text: item, value: item };
  });

  const ageOptions = [
    { key: 1, text: "Baby", value: "Baby" },
    { key: 2, text: "Young", value: "Young" },
    { key: 3, text: "Adult", value: "Adult" },
    { key: 4, text: "Senior", value: "Senior" },
  ];

  const sizeOptions = [
    { key: 1, text: "Small", value: "Small" },
    { key: 2, text: "Medium", value: "Medium" },
    { key: 3, text: "Large", value: "Large" },
    { key: 4, text: "Xlarge", value: "Xlarge" },
  ];

  const handleChange = (e: any, data: any, type: any): void => {
    switch (type) {
      case "breed":
        setBreedValue(data.value);
        break;
      case "age":
        setAgeValue(data.value);
        break;
      case "size":
        setSizeValue(data.value);
        break;
      case "gender":
        setGenderValue(data.value);
        break;
      case "coat":
        setCoatValue(data.value);
        break;
      case "color":
        setColorValue(data.value);
        break;
      default:
        break;
    }

    navigate({
      pathname: "/search",
      search: `?${createSearchParams({
        ...params,
        [data.placeholder.toLowerCase()]: data.value,
      })}`,
    });
  };

  return (
    <div className={styles.filterWrapper}>
      <DropdownClearable
        options={breedOptions}
        placeholder="Breed"
        onChange={(e: any, data: any) => handleChange(e, data, "breed")}
        value={breedValue}
      />
      <DropdownClearable
        options={ageOptions}
        placeholder="Age"
        onChange={(e: any, data: any) => handleChange(e, data, "age")}
        value={ageValue}
      />
      <DropdownClearable
        options={sizeOptions}
        placeholder="Size"
        onChange={(e: any, data: any) => handleChange(e, data, "size")}
        value={sizeValue}
      />
      <DropdownClearable
        options={genderOptions}
        placeholder={"Gender"}
        onChange={(e: any, data: any) => handleChange(e, data, "gender")}
        value={genderValue}
      />
      <DropdownClearable
        options={coatOptions}
        placeholder="Coat"
        onChange={(e: any, data: any) => handleChange(e, data, "coat")}
        value={coatValue}
      />
      <DropdownClearable
        options={colorOptions}
        placeholder="Color"
        onChange={(e: any, data: any) => handleChange(e, data, "color")}
        value={colorValue}
      />
      {/* <DropdownClearable options={options} placeholder="Shelter or Rescue" /> */}
    </div>
  );
};

import DropdownClearable from "../DropDown/Dropdown";
import { selectBreeds } from "../../slice/breedsSlice";
import { selectTypes } from "../../slice/typesSlice";
import { useAppSelector } from "../../hooks";

import styles from "./styles.module.css";

export const FilterBar = () => {
  const { breeds } = useAppSelector(selectBreeds);
  const {
    type: { coats, colors, genders },
  } = useAppSelector(selectTypes);

  const breedOptions = breeds?.map((item: any, idx: any) => {
    return { key: idx + 1, text: item.name, value: item.name };
  });

  const colorOptions = colors?.map((item: any, idx: any) => {
    return { key: idx + 1, text: item, value: item };
  });

  const coatOptions = coats?.map((item: any, idx: any) => {
    return { key: idx + 1, text: item, value: item };
  });

  const genderOptions = genders?.map((item: any, idx: any) => {
    return { key: idx + 1, text: item, value: item };
  });

  const ageOptions = [
    { key: 1, text: "baby", value: "baby" },
    { key: 2, text: "young", value: "young" },
    { key: 3, text: "adult", value: "adult" },
    { key: 4, text: "senior", value: "senior" },
  ];

  const sizeOptions = [
    { key: 1, text: "small", value: "small" },
    { key: 2, text: "medium", value: "medium" },
    { key: 3, text: "large", value: "large" },
    { key: 4, text: "xlarge", value: "xlarge" },
  ];

  const options = [
    { key: 1, text: "Choice 1", value: 1 },
    { key: 2, text: "Choice 2", value: 2 },
    { key: 3, text: "Choice 3", value: 3 },
  ];

  return (
    <div className={styles.filterWrapper}>
      <DropdownClearable options={breedOptions} placeholder="Breeds" />
      <DropdownClearable options={ageOptions} placeholder="Age" />
      <DropdownClearable options={sizeOptions} placeholder="Size" />
      <DropdownClearable options={genderOptions} placeholder="Gender" />
      <DropdownClearable options={coatOptions} placeholder="Coat Length" />
      <DropdownClearable options={colorOptions} placeholder="Color" />
      <DropdownClearable options={options} placeholder="Shelter or Rescue" />
    </div>
  );
};

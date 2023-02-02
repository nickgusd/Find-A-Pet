import DropdownClearable from "../DropDown/Dropdown";

import styles from "./styles.module.css";

export const FilterBar = () => {
  const options = [
    { key: 1, text: "Choice 1", value: 1 },
    { key: 2, text: "Choice 2", value: 2 },
    { key: 3, text: "Choice 3", value: 3 },
  ];
  return (
    <div className={styles.filterWrapper}>
      <DropdownClearable options={options} placeholder="Breed" />
      <DropdownClearable options={options} placeholder="Age" />
      <DropdownClearable options={options} placeholder="Size" />
      <DropdownClearable options={options} placeholder="Gender" />
      <DropdownClearable options={options} placeholder="Coat Length" />
      <DropdownClearable options={options} placeholder="Color" />
      <DropdownClearable options={options} placeholder="Shelter or Rescue" />
    </div>
  );
};

import { Dropdown } from "semantic-ui-react";

interface DropdownClearableProps {
  options: Array<any>;
  placeholder: string;
}

const DropdownClearable = ({
  options,
  placeholder,
}: DropdownClearableProps) => (
  <Dropdown clearable options={options} selection placeholder={placeholder} />
);

export default DropdownClearable;

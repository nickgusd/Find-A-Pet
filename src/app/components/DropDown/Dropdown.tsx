import { Dropdown } from "semantic-ui-react";

interface DropdownClearableProps {
  options: Array<any>;
  placeholder: any;
  onChange: any;
  value: any;
}

const DropdownClearable = ({
  options,
  placeholder,
  onChange,
  value,
}: DropdownClearableProps) => (
  <Dropdown
    value={value}
    clearable
    options={options}
    selection
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default DropdownClearable;

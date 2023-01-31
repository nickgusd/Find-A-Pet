import { ReactEventHandler } from "react";
import { Input } from "semantic-ui-react";

export interface SearchProps {
  onChangeSearch: ReactEventHandler;
  onChangeLocation: ReactEventHandler;
}

const Search = ({ onChangeSearch, onChangeLocation }: SearchProps) => (
  <Input
    action={
      <Input
        size="large"
        placeholder="Enter Zipcode"
        onChange={onChangeLocation}
      />
    }
    icon="search"
    iconPosition="left"
    placeholder="Search..."
    size="large"
    onChange={onChangeSearch}
  />
);

export default Search;

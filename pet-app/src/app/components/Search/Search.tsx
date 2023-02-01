import { ReactEventHandler } from "react";
import { Input } from "semantic-ui-react";

export interface SearchProps {
  onChangeSearch: ReactEventHandler;
  onChangeLocation: ReactEventHandler;
  noLocation: boolean;
}

const Search = ({
  onChangeSearch,
  onChangeLocation,
  noLocation,
}: SearchProps) => (
  <Input
    action={
      <Input
        error={noLocation ? true : false}
        size="large"
        placeholder={noLocation ? "Location is required" : "Enter Zipcode"}
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

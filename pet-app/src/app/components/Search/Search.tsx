import { ReactEventHandler } from "react";
import { Input } from "semantic-ui-react";
import ButtonComponent from "../Button/Button";

export interface SearchProps {
  onChangeSearch: ReactEventHandler;
  onChangeLocation: ReactEventHandler;
  onClick: any;
  noLocation: boolean;
  icon: string | null;
  size: any;
  isSearchPage: boolean;
}

const Search = ({
  onChangeSearch,
  onChangeLocation,
  onClick,
  noLocation,
  icon,
  size,
  isSearchPage,
}: SearchProps) => (
  <Input
    action={
      <>
        <Input
          error={noLocation ? true : false}
          size={size}
          placeholder={noLocation ? "Zipcode is required" : "Enter Zipcode"}
          onChange={onChangeLocation}
        />
        {isSearchPage && (
          <ButtonComponent primary onClick={onClick} label="Search" />
        )}
      </>
    }
    icon={icon}
    iconPosition="left"
    placeholder="Search..."
    size={size}
    onChange={onChangeSearch}
  />
);

export default Search;

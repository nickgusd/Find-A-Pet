import { ReactEventHandler } from "react";
import { Input } from "semantic-ui-react";
import ButtonComponent from "../Button/Button";

import styles from "./styles.module.css";

export interface SearchProps {
  onChangeSearch: ReactEventHandler;
  onChangeLocation: ReactEventHandler;
  onClick: any;
  noLocation: boolean;
  icon: string | null;
  size: any;
  isSearchPage: boolean;
  isMobile: boolean;
}

const Search = ({
  onChangeSearch,
  onChangeLocation,
  onClick,
  noLocation,
  icon,
  size,
  isSearchPage,
  isMobile = false,
}: SearchProps) => (
  <div className={isMobile ? styles.searchInputs : ""}>
    <Input
      action={
        !isMobile ? (
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
        ) : null
      }
      icon={icon}
      iconPosition="left"
      placeholder="Search..."
      size={size}
      onChange={onChangeSearch}
    />
    {isMobile && (
      <Input
        error={noLocation ? true : false}
        size={size}
        placeholder={noLocation ? "Zipcode is required" : "Enter Zipcode"}
        onChange={onChangeLocation}
      />
    )}
  </div>
);

export default Search;

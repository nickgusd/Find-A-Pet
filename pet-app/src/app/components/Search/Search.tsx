import { Input } from "semantic-ui-react";

const Search = () => (
  <Input
    action={<Input size="large" placeholder="Enter City, State, or Zip" />}
    icon="search"
    iconPosition="left"
    placeholder="Search..."
    size="large"
  />
);

export default Search;

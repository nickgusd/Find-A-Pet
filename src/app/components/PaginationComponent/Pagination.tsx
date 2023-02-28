import { Pagination } from "semantic-ui-react";

export interface PaginationComponentProps {
  totalPages: number;
  onChange: any;
  activePage: number;
}

const PaginationComponent = ({
  totalPages,
  onChange,
  activePage,
}: PaginationComponentProps) => (
  <>
    {totalPages > 1 && (
      <Pagination
        boundaryRange={0}
        activePage={activePage || 1}
        ellipsisItem={null}
        onPageChange={onChange}
        firstItem
        lastItem
        siblingRange={1}
        totalPages={totalPages}
      />
    )}
  </>
);

export default PaginationComponent;

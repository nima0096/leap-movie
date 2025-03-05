import { SearchInput } from "./SearchInput";

type SearchBarForSearchPageProps = { isMobile: boolean };

export const SearchBarForSearchPage = ({
  isMobile,
}: SearchBarForSearchPageProps) => {
  return (
    <div>
      <SearchInput isMobile={isMobile} searchValue="" handleChange={() => {}} />
    </div>
  );
};

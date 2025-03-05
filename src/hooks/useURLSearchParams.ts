import { useSearchParams } from "next/navigation";

export const useURLSearchParams = (pathname: string) => {
  const searchParams = useSearchParams();

  const currentPage = searchParams.get("page") ?? "1";
  const genreIds = searchParams.get("genreIds") ?? "";

  const selectedGenreIds = genreIds.split(",").filter(Boolean);

  const generateQueryParams = (genreId: string) => {
    const updatedGenreIds = selectedGenreIds.includes(genreId)
      ? selectedGenreIds.filter((id) => id !== genreId)
      : [...selectedGenreIds, genreId];

    const queryParams = new URLSearchParams();

    if (updatedGenreIds.length) {
      queryParams.set("page", currentPage);
      queryParams.set("genreIds", updatedGenreIds.join(","));
    }

    const queryString = queryParams.toString();

    const newPath = queryString ? `${pathname}?${queryString}` : pathname;

    return newPath;
  };

  return { selectedGenreIds, generateQueryParams };
};

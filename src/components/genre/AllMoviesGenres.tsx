"use client";

import { useFetchDataFromTMDB, useURLSearchParams } from "@/hooks";
import { Badge } from "../ui";
import { cn } from "@/lib";
import { ChevronRight, X } from "lucide-react";
import { useRouter } from "next/navigation";

export const AllMoviesGenres = ({ pathname = "/genres" }) => {
  const { push } = useRouter();
  const { selectedGenreIds, generateQueryParams } =
    useURLSearchParams(pathname);

  const { data, isLoading } = useFetchDataFromTMDB<MovieGenresResponse>(
    "/genre/movie/list?language=en"
  );

  const handleGenreSelection = (genreId: string) => {
    const newPath = generateQueryParams(genreId);

    push(newPath);
  };

  if (isLoading) return <div>Loading...</div>;

  const genres = data?.genres || [];

  return (
    <div className="flex flex-wrap gap-4">
      {genres.map((genre, index) => {
        const genreId = genre.id.toString();
        const isSelected = selectedGenreIds.includes(genreId);

        return (
          <Badge
            key={index}
            variant="outline"
            className={cn(
              "rounded-full cursor-pointer",
              isSelected && "bg-black text-white dark:bg-white dark:text-black"
            )}
            onClick={() => handleGenreSelection(genreId)}
          >
            {genre.name}

            {isSelected ? (
              <X size={16} className="ml-2" />
            ) : (
              <ChevronRight size={16} className="ml-2" />
            )}
          </Badge>
        );
      })}
    </div>
  );
};

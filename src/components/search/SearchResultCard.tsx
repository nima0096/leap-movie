import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Separator } from "../ui";
import { ArrowRight } from "lucide-react";
import { MovieImage } from "../movie";
import { Vote } from "../common";

type SearchResultCardProps = {
  movie: MovieDetail;
  removeSearchValue: () => void;
};

export const SearchResultCard = ({
  movie,
  removeSearchValue,
}: SearchResultCardProps) => {
  const { id, original_title, release_date, poster_path, vote_average } = movie;

  const releaseYear = release_date ? new Date(release_date).getFullYear() : "";

  return (
    <Fragment>
      <Link
        href={`/details/${id}`}
        className="flex gap-x-4 p-2 rounded-md"
        onClick={removeSearchValue}
      >
        <MovieImage
          posterPath={poster_path}
          imageWidth="w154"
          className="w-[67px] h-[100px] rounded-md"
        />

        <div className="flex-1 text-foreground">
          <h4 className="w-48 lg:w-96 truncate text-xl font-semibold">
            {original_title}
          </h4>
          <Vote voteAverage={vote_average} />

          <div className="mt-3 flex justify-between text-sm font-medium">
            <h5>{releaseYear}</h5>
            <Button variant="link">
              See more <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Link>

      <Separator className="my-2 border" />
    </Fragment>
  );
};

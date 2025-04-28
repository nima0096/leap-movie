import { getMoviesByCategory } from "@/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MovieLists } from "../movie";
import { Button } from "../ui";

export const MoviesListByCategory = async (props: MovieCategoryPage) => {
  const { title, category, seeMorePath } = props;

  const response = await getMoviesByCategory({
    page: "1",
    segments: [category],
  });

  const movies = response?.movies || [];
  const firstTenMovies = movies.slice(0, 10);

  return (
    <div className="page-primary space-y-8 my-10">
      <div className=" flex items-center justify-between ">
        <h3 className="text-foreground text-2xl font-semibold">{title}</h3>

        <Link href={seeMorePath}>
          <Button variant="link">
            See more <ArrowRight />
          </Button>
        </Link>
      </div>
      <MovieLists movies={firstTenMovies} />
    </div>
  );
};

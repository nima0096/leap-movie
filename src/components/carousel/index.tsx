import { getMoviesByCategory } from "@/servises";

export const Carousel = async () => {
  getMoviesByCategory({
    page: "1",
    segments: ["now_playing"],
  });
  const firstTenMovies = (response?.movies as MovieDetail[]).slice(0, 10);

  console.log(firstTenMovies);

  return <div>Carousel</div>;
};

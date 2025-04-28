import { fetchDataFromTMDB } from "@/utils";

type CategoryMoviesRequest = {
  page: string;
  segments: string[];
};

export const getMoviesByCategory = async ({
  page,
  segments,
}: CategoryMoviesRequest) => {
  const categoryPath = segments.join("/");
  try {
    const { results: movies, total_pages: totalPages } =
      await fetchDataFromTMDB<moviesListResponse>(
        `/movie/${categoryPath}?language=en-US&page=${page}`
      );
    return { movies, totalPages };
  } catch (error: unknown) {
    const { message, response } = error as AxiosError;
    console.error(`Failed to fetch the data due to ${message}`, {
      data: response?.data,
      status: response?.status,
    });
  }
};

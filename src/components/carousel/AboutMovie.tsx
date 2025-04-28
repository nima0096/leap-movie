import { Vote } from "../common";
import { Trailer } from "./Trailer";

type AboutMovieProps = {
  movie: MovieDetail;
};

export const AboutMovie = ({ movie }: AboutMovieProps) => {
  const { id, original_title, vote_average, overview } = movie;

  return (
    <div
      className="static text-foreground lg:absolute lg:top-1/2 
    lg:left-[140px] lg:-translate-y-1/2 lg:text-white z-10"
    >
      <div className="p-5 space-y-4 lg:p-0">
        <div className="flex justify-between lg:flex-col lg:space-y-1">
          <div>
            <h4 className="text-sm">Now Playing:</h4>
            <h3 className="w-52 text-2xl font-semibold truncate">
              {original_title}
            </h3>
          </div>

          <Vote
            voteAverage={vote_average}
            size={28}
            voteAverageColor="lg:text-white"
          />
        </div>

        <p className="w-[302px] text-sm line-clamp-5">{overview}</p>
        <Trailer id={id} />
      </div>
    </div>
  );
};

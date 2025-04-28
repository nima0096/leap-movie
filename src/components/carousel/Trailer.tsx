import { useFetchDataFromTMDB } from "@/hooks";
import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui";
import { Play } from "lucide-react";
import YouTube from "react-youtube";

type TrailerProps = {
  id: number;
};

export const Trailer = ({ id }: TrailerProps) => {
  const { data } = useFetchDataFromTMDB<MovieVideosResponse>(
    `/movie/${id}/videos?language=en-US`
  );

  const movieTrailer = data?.results?.find((movie) => movie.type === "Trailer");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <Play size={16} />
          <h4 className="text-sm">Watch Trailer</h4>
        </Button>
      </DialogTrigger>

      <DialogTitle></DialogTitle>

      <DialogContent className="p-8 border-none">
        <YouTube
          videoId={movieTrailer?.key}
          opts={{ width: "100%", height: 200 }}
        />
      </DialogContent>
    </Dialog>
  );
};

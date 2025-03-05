import { Suspense } from "react";
import { Button } from "@/components/ui";
import React from "react";

type MovieRouteParams = {
  params: {
    movieId: string;
  };
};

const MovieDetails = async ({ params }: MovieRouteParams) => {
  const { movieId } = await params;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Button variant="outline">Shadcn Button</Button>
      <h1>Movie Details</h1>
      <p>ID: {movieId}</p>
    </Suspense>
  );
};

export default MovieDetails;

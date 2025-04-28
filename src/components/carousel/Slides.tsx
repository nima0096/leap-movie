"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui";
import { Slide } from "./Slide";

type SlidesProps = {
  movies: MovieDetail[];
};

export const Slides = ({ movies }: SlidesProps) => {
  return (
    <Carousel className="relative mt-[59px] lg:mt-[89px] w-screen">
      <CarouselContent>
        {movies.map((movie, index) => (
          <CarouselItem key={index}>
            <Slide movie={movie} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-11" />
      <CarouselNext className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-11" />
    </Carousel>
  );
};

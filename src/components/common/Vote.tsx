import { cn } from "@/lib";
import { Star } from "lucide-react";
import React from "react";

type VoteProps = {
  voteAverage: number;
  size?: number;
  showStar?: boolean;
  voteAverageColor?: string;
};

export const Vote = ({
  size = 16,
  voteAverage,
  showStar = true,
  voteAverageColor = "",
}: VoteProps) => {
  const formattedVoteAverage = voteAverage.toFixed(1);

  return (
    <div className="flex items-center gap-x-1">
      {showStar && <Star size={size} fill="#fde047" color="#fde047" />}

      <div className="font-medium">
        <span className={cn("text-foreground text-sm", voteAverageColor)}>
          {formattedVoteAverage}
        </span>
        <span className="text-muted-foreground text-xs">/10</span>
      </div>
    </div>
  );
};

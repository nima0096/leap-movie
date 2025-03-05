import { Star } from "lucide-react";
import React from "react";

type VoteProps = {
  voteAverage: number;
  size?: number;
  showStar?: boolean;
};

export const Vote = ({
  size = 16,
  voteAverage,
  showStar = true,
}: VoteProps) => {
  const formattedVoteAverage = voteAverage.toFixed(1);

  return (
    <div className="flex items-center gap-x-1">
      {showStar && <Star size={size} fill="#fde047" color="#fde047" />}

      <div className="font-medium">
        <span className="text-foreground text-sm">{formattedVoteAverage}</span>
        <span className="text-muted-foreground text-xs">/10</span>
      </div>
    </div>
  );
};

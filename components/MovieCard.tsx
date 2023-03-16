import React from "react";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return (
    <div className="col-span group relative h-[12vw] bg-zinc-900">
      <img
        src={data.thumbnailUrl}
        alt="Thumbnail"
        className="duration h-[12vw] w-full cursor-pointer rounded-md object-cover shadow-xl transition delay-300 group-hover:opacity-90 sm:group-hover:opacity-0"
      />
    </div>
  );
};

export default MovieCard;

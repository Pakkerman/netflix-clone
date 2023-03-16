import React from "react";
import { useRouter } from "next/router";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="flex w-auto flex-row items-center rounded-md bg-white py-1 px-2 text-xs font-semibold transition hover:bg-neutral-300 md:py-2 md:px-4 lg:text-lg"
    >
      <BsFillPlayFill size={25} className="mr-1" />
      <span className="mr-1.5">Play</span>
    </button>
  );
};

export default PlayButton;

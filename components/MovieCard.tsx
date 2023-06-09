import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfo } from "react-icons/ai";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/router";
import useInfoModal from "@/hooks/useInfoModal";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();
  const { openModal } = useInfoModal();

  return (
    <div className="col-span group relative h-[12vw] bg-zinc-900">
      <img
        src={data.thumbnailUrl}
        alt="Thumbnail"
        className="duration h-[12vw] w-full cursor-pointer rounded-md object-cover shadow-xl transition delay-300 group-hover:opacity-90 sm:group-hover:opacity-0"
      />
      <div className="invisible absolute top-0 z-10 w-full scale-0 opacity-0 transition delay-300 duration-200 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:scale-110 group-hover:opacity-100 sm:visible">
        <img
          src={data.thumbnailUrl}
          alt="thumbnail"
          className="cursor-point duration h-[12vw] w-full rounded-t-md object-cover shadow-xl transition"
        />
        <div className="absolute z-10 w-full rounded-b-md bg-zinc-800 p-2 shadow-md transition lg:p-4">
          <div className="flex flex-row items-center gap-3">
            <div
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white transition hover:bg-neutral-300 lg:h-10 lg:w-10"
              onClick={() => router.push(`/watch/${data?.id}`)}
            >
              <BsFillPlayFill size={30} />
            </div>
            <FavoriteButton movieId={data.id} />
            <div className="group/item border-whtie ml-auto flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 transition hover:border-neutral-300 lg:h-10 lg:w-10">
              <AiOutlineInfo
                onClick={() => openModal(data?.id)}
                size={25}
                className="text-white group-hover/item:text-neutral-300"
              />
            </div>
          </div>
          <p className="mt-4 font-semibold text-green-400">
            New <span className="text-white">2023</span>
          </p>
          <div className="mt-4 flex flex-row items-center gap-2 ">
            <p className="text-[10px] text-white lg:text-sm">{data.duration}</p>
          </div>
          <div className="mt-4 flex flex-row items-center gap-2 ">
            <p className="text-[10px] text-white lg:text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

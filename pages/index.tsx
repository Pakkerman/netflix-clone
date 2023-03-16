import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useFavorites from "@/hooks/useFavorites";
import useMovieList from "@/hooks/useMovieList";

import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

// This function will be call by next.js whe the page loads to check if a user is logged in
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) return { redirect: { destination: "/auth", permanent: false } };

  return { props: {} };
}

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Tranding Now" data={movies} />
        <MovieList title="Your Favorites" data={favorites} />
      </div>
    </>
  );
}

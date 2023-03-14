import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

// This function will be call by next.js whe the page loads to check if a user is logged in
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) return { redirect: { destination: "/auth", permanent: false } };

  return { props: {} };
}

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <div className="">
      <h1 className="text-green-400">netflix-clone</h1>
      <p className="text-white">Logged in as :{user?.email}</p>
      <button onClick={() => signOut()} className="h-10 w-full bg-white">
        Logout
      </button>
    </div>
  );
}

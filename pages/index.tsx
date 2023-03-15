import Billboard from "@/components/Billboard";
import Navbar from "@/components/Navbar";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

// This function will be call by next.js whe the page loads to check if a user is logged in
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) return { redirect: { destination: "/auth", permanent: false } };

  return { props: {} };
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Billboard />
    </>
  );
}

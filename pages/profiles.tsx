import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession();
  if (!session) {
    return { redirect: { destination: "/auth", permanet: false } };
  }
}

const Profiles = () => {
  return (
    <div>
      <p className="text-4xl text-white">Profiles</p>
    </div>
  );
};

export default Profiles;

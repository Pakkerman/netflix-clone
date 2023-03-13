import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center bg-slate-800">
      <h1 className="text-green-400">netflix-clone</h1>
    </div>
  );
}

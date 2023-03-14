import axios from "axios";
import Input from "@/components/Input";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Auth() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
    setEmail("");
    setName("");
    setPassword("");
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  // the video uses useCallback(), dont really understand why. So I try use a regular async function and it works
  // TODO: Dig into docs to find out why or keep watching the video and maybe it will make sense when other
  // features are implemented
  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="h-full w-full bg-black lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="self-center rounded-md bg-black bg-opacity-70 px-16 py-16 lg:w-2/5 lg:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold text-white">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  onChange={(event: any) => setName(event.target.value)}
                  id="name"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={(event: any) => setEmail(event.target.value)}
                type="email"
                id="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(event: any) => setPassword(event.target.value)}
                type="password"
                id="password"
                value={password}
              />
            </div>
            <button
              onClick={variant === "login" ? login : register}
              className="mt-10 w-full rounded-md bg-red-600 py-3 text-white transition hover:bg-red-700"
            >
              {variant === "login" ? "Login" : "Sign Up"}
            </button>
            <div className="mt-8 flex flex-row items-center justify-center gap-4">
              <div
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white transition hover:opacity-80"
              >
                <FcGoogle size={30} />
              </div>
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white transition hover:opacity-80">
                <FaGithub
                  onClick={() => signIn("github", { callbackUrl: "/" })}
                  size={30}
                />
              </div>
            </div>
            <p className="mt-12 text-neutral-500">
              {variant === "login"
                ? "First time using Netflix?"
                : "Have an account?"}
              <span
                onClick={toggleVariant}
                className="ml-1 cursor-pointer text-white hover:underline"
              >
                {variant === "login" ? "Create an Account" : "Sign in instead"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

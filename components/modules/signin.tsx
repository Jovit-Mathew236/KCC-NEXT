"use client";
import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase/config";
import { toast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/admin");
    } catch (error) {
      setError("Error during Google sign-in");
      console.error(error);
    }
  };

  const signInWithEmail = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin");
    } catch (error) {
      setError("Error during email sign-in");
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: (
          <ToastAction
            onClick={() => {
              router.refresh();
            }}
            altText="Try again"
          >
            Try again
          </ToastAction>
        ),
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen text-white">
      <div className=" text-sm rounded-lg  block card p-2.5 bg-gray-700 bg-opacity-20 backdrop-blur-md  placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={signInWithEmail} className="mb-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-100">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="placeholder-gray-700 text-gray-900 w-full p-2 border border-gray-300 rounded"
              placeholder="Type your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-100">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="placeholder-gray-700 text-gray-900 w-full p-2 border border-gray-300 rounded"
              placeholder="Type your password"
              required
            />
          </div>
          <button
            type="submit"
            className="btn w-full py-2 rounded bg-red-600 hover:bg-red-700"
          >
            Sign in with Email
          </button>
        </form>
        <div className="h-[.1px] my-4 mx-auto w-[50%] bg-white"></div>
        <div className="mb-4">
          <button
            onClick={signInWithGoogle}
            className="w-full font-thin rounded mb-2"
          >
            Sign in with Google
          </button>
        </div>

        <div id="error" className="text-red-500 text-center"></div>
      </div>
    </div>
  );
};

export default SignIn;

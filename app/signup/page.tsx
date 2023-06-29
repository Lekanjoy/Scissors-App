"use client";
import React, { useContext, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import AuthContext from "@/AuthContext/authContext";
import { revealPassword } from "@/utils/revealPassword";
import eye from "@/public/registration/eye.svg";

const SignupForm = () => {
  const UserNameRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);
  const PasswordConfirmRef = useRef<HTMLInputElement>(null);

  const { registerUser, isRegistering } = useContext(AuthContext);

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if user credentials are not empty, null or undefined
    if (
      !EmailRef.current ||
      !PasswordRef.current ||
      !PasswordConfirmRef.current ||
      !UserNameRef.current ||
      EmailRef.current.value.trim() === "" ||
      PasswordRef.current.value.trim() === "" ||
      PasswordConfirmRef.current.value.trim() === "" ||
      UserNameRef.current.value.trim() === ""
    ) {
      toast.error("All fields are required!");
      return;
    }
    // Check if password is at least 8 characters long
    if (PasswordRef.current.value.length < 8) {
      toast.error("Password must be at least 8 characters long!");
      return;
    }
    // Check if password and confirm password are the same
    if (PasswordRef.current.value !== PasswordConfirmRef.current.value) {
      toast.error("Passwords do not match!");
      return;
    }

    // Register user
    registerUser(
      EmailRef.current?.value,
      PasswordRef.current?.value,
      PasswordConfirmRef.current?.value,
      UserNameRef.current?.value
    );
  };

  return (
    <section className="flex flex-col justify-center items-center w-full min-h-screen px-8 lg:px-[93px] ">
      <p className="mb-4 text-sm text-[#5C6F7F]">Log in with:</p>
      <div className="flex gap-x-6 mb-4">
        <button className="w-[109px] h-10 flex justify-center items-center gap-x-[3px] text-sm text-white bg-primaryColor rounded">
          <Image
            src="/registration/google.svg"
            alt="google"
            width={20}
            height={20}
          />
          oogle
        </button>
        <button className="w-[109px] h-10 flex justify-center items-center gap-x-[3px] text-sm text-white bg-primaryColor rounded">
          <Image
            src="/registration/apple.svg"
            alt="google"
            width={13}
            height={18}
          />
          Apple
        </button>
      </div>
      <div className="text-[#5C6F7F] relative mb-8 before:absolute before:bottom-[10px] before:bg-[#A0B1C0] before:right-[20px] before:w-[200px] before:h-[1px] after:absolute after:bottom-[10px] after:left-[20px] after:w-[200px] after:h-[1px] after:bg-[#A0B1C0]">
        Or
      </div>
      <form
        autoComplete="true"
        onSubmit={handleSignUp}
        className="w-[430px] flex flex-col gap-y-8"
      >
        <div className="relative w-full">
          <input
            ref={UserNameRef}
            type="text"
            placeholder="Username"
            className="w-full px-[19px] py-[11px] border bg-transparent border-primaryColor rounded otline-none focus-within:outline-primaryColor"
          />
        </div>
        <div className="relative w-full">
          <input
            ref={EmailRef}
            type="email"
            placeholder="Email "
            className="w-full px-[19px] py-[11px] border bg-transparent border-primaryColor rounded otline-none focus-within:outline-primaryColor"
          />
        </div>
        <div className="relative w-full">
          <input
            ref={PasswordRef}
            type="password"
            placeholder="Password"
            className="w-full px-[19px] py-[11px] border bg-transparent border-primaryColor rounded otline-none focus-within:outline-primaryColor"
          />
          <Image
            src={eye}
            alt="Eye Hide Icon"
            className="absolute right-2 top-4 cursor-pointer"
            onClick={() => revealPassword(PasswordRef)}
          />
        </div>
        <div className="relative w-full">
          <input
            ref={PasswordConfirmRef}
            type="password"
            placeholder="Retype Password"
            className="w-full px-[19px] py-[11px] border bg-transparent border-primaryColor rounded otline-none focus-within:outline-primaryColor"
          />
          <Image
            src={eye}
            alt="Eye Hide Icon"
            className="absolute right-2 top-4 cursor-pointer"
            onClick={() => revealPassword(PasswordConfirmRef)}
          />
        </div>
        <button
          type="submit"
          className={`w-full px-[18px] py-2 bg-primaryColor mt-4 text-sm text-white rounded-full hover:bg-blue-600
          ${isRegistering ? "cursor-not-allowed" : "cursor-pointer"}`}
          disabled={isRegistering}
        >
          Sign up with Email
        </button>
      </form>
      <div className="w-full text-center mt-[18px]">
        <div className=" text-sm text-[#5C6F7F] mb-[15px]">
          Already have an account?{" "}
          <Link href="/login" className="text-primaryColor">
            Log In
          </Link>
        </div>
        <div className="mt-[15px] text-xs text-[mb-[15px]]">
          <p>By signing in with an account, you agree to </p>
          <p>
            Sciccor&lsquo;s &lsquo;
            <span className="text-[#5C6F7F]">
              Terms of Service, Privacy Policy
            </span>
            &rsquo; and &lsquo;
            <span className="text-[#5C6F7F]">Acceptable Use Policy</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;

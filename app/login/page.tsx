'use client'
import React, {useState, useContext} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AuthContext from '@/AuthContext/authContext';
import eye from "@/public/registration/eye.svg";


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {loginUser} = useContext(AuthContext);

  const handleLogin =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <section className="flex flex-col justify-center  items-center w-full h-screen px-8 lg:px-[93px] lg:pt-[146px]">
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
      <form autoComplete='true' onSubmit={handleLogin} className="w-[430px] flex flex-col gap-y-8">
        <div className="relative w-full">
          <input
            type="email"
            placeholder="Email address or username"
            className="w-full px-[19px] py-[11px] border bg-transparent border-primaryColor rounded  focus-within:outline-primaryColor"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative w-full">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-[19px] py-[11px] border bg-transparent border-primaryColor rounded  focus-within:outline-primaryColor"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Image src={eye} alt="Eye Hide Icon" className="absolute right-2 top-4" />
        </div>
        <button
          type="submit"
          className="w-full px-[18px] py-2 bg-primaryColor mt-4 text-sm text-white rounded-full hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <div className="w-full text-center mt-[18px]">
        <div className=" text-sm text-[#5C6F7F] mb-[15px]">
          Don’t have an account? {" "}
          <Link href="/signup" className="text-primaryColor">
            Sign up
          </Link>
        </div>
        <div className="mt-[15px] text-xs text-[mb-[15px]]">
          <p>By signing in with an account, you agree to </p>
          <p>
            Sciccor's{" "}
            <span className="text-[#5C6F7F]">
              Terms of Service, Privacy Policy
            </span>{" "}
            and <span className="text-[#5C6F7F]">Acceptable Use Policy</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
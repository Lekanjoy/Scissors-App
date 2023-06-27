"use client";
import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AuthContext = createContext({} as ContextDataType);

interface SignUpData {
  email: string;
  username: string;
  password: string;
  password2: string;
}

interface SignUpResponse {
  email: string;
  username: string;
}

type ContextDataType = {
  user: any;
  setUser: (data: any) => void;
  // setAuthTokens: (data: {
  //   access: string;
  //   refresh: string;
  // }) => void ;
  setAuthTokens: (data: any) => void;
  authTokens: {
    access: string;
    refresh: string;
  } | null;
  loginUser: (userEmail: string, userPassword: string) => void;
  registerUser: (
    userEmail: string,
    userName: string,
    userPassword: string,
    confirmPassWord: string
  ) => void;
  logoutUser: () => void;
};



export default AuthContext;

export const AuthProvider = ({ children }: any) => {
  const [authTokens, setAuthTokens] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  // User LogIn Function
  const loginUser = async (userEmail: string, userPassword: string) => {
    try {
      const response = await fetch(
        "https://nwa.pythonanywhere.com/api/token/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
            password: userPassword,
          }),
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        setAuthTokens(data);
        setUser(jwt_decode(data.access));
        if (typeof window !== "undefined") {
          localStorage.setItem("authTokens", JSON.stringify(data));
        }
        toast.success("Login Successfull!", {});
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login Unsuccessfull!", {});
    }
  };

  // User Registration Function
  const registerUser = async (
    userEmail: string,
    userPassword: string,
    confirmPassWord: string,
    userName: string
  ) => {
    const signUpData: SignUpData = {
      email: userEmail,
      password: userPassword,
      password2: confirmPassWord,
      username: userName,
    };

    try {
      const response = await fetch(
        "https://nwa.pythonanywhere.com/api/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signUpData),
        }
      );
      if (response.status === 201) {
        const data: SignUpResponse = await response.json();
        toast.success("Signup Successfull!", {});
        router.push("/login");
        return data;
      }
    } catch (error) {
      console.error(error);
      toast.error("Signup Unsuccessfull!", {});
    }
  };

  // User Logout Function
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("authTokens");
    }
    toast.success("Logged Out!", {});
    router.push("/login");
  };

  useEffect(() => {
    const authTokensFromStorage = localStorage.getItem("authTokens");
    if (authTokensFromStorage) {
      const initialAuthTokens = JSON.parse(authTokensFromStorage);
      setAuthTokens(initialAuthTokens);
      setUser(jwt_decode(initialAuthTokens.access));
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        authTokens,
        setAuthTokens,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

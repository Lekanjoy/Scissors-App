"use client";
import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/navigation";

const AuthContext = createContext({});

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

export default AuthContext;

export const AuthProvider = ({ children }: any) => {
  const authTokensFromStorage = localStorage.getItem("authTokens");
  const initialAuthTokens = authTokensFromStorage
    ? JSON.parse(authTokensFromStorage)
    : null;

  const initialUser = authTokensFromStorage
    ? jwt_decode(authTokensFromStorage)
    : null;

  const [authTokens, setAuthTokens] = useState(initialAuthTokens);
  const [user, setUser] = useState(initialUser);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const loginUser = async (userEmail: string, userPassword: string) => {
    const response = await fetch("https://nwa.pythonanywhere.com/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    });
    const data = await response.json();
    console.log(data);

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      console.log("Logged In");
      router.push("/");
    } else {
      console.log(response.status);
      console.log("There was a server issue");
    }
  };

  const registerUser = async (
    userEmail: string,
    userName: string,
    userPassword: string,
    confirmPassWord: string
  ) => {
    const signUpData: SignUpData = {
      email: userEmail,
      username: userName,
      password: userPassword,
      password2: confirmPassWord,
    };

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
      console.log(data);
      router.push("/login");
      return data;
    } else {
      console.log(response.status);
      console.log("there was a server issue");
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    router.push("/login");
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser,
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
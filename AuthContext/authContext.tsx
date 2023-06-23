"use client";
import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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
        localStorage.setItem("authTokens", JSON.stringify(data));
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
      } else {
        toast.error("Please fill all fields!", {});
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
    localStorage.removeItem("authTokens");
    toast.success("Logged Out!", {});
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

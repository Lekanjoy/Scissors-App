import { useContext } from "react";
import axios from "axios";
import jwt_decode, { JwtPayload }  from "jwt-decode";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import AuthContext from "../AuthContext/authContext";

const baseURL = "https://nwa.pythonanywhere.com"; // Move this to .env and other endpoints


const useAxios = () => {
  const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${authTokens?.access}` },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    try {
      const accessTkn: string | undefined = authTokens?.access;
      const user = accessTkn
        ? (jwt_decode(accessTkn) as JwtPayload)
        : undefined;
      const isExpired =
        user && user.exp && dayjs.unix(user.exp).diff(dayjs()) < 1;

      if (!isExpired) return req;

    } catch (error) {
      console.error(error);
      toast.error("Please login first");
    }

    // Refresh Token
    const response = await axios.post(`${baseURL}/api/token/refresh/`, {
      refresh: authTokens?.refresh,
    });
    localStorage.setItem("authTokens", JSON.stringify(response.data));
    setAuthTokens(response.data);
    setUser(jwt_decode(response.data.access));
    req.headers.Authorization = `Bearer ${response.data.access}`;
    return req;
  });

  return axiosInstance;
};

export default useAxios;

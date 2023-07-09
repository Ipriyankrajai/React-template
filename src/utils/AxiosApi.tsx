import axios from "axios";
import { store } from "../store/store";
import { baseURL } from "./constants";

const AxiosApi = (
  method: "GET" | "POST" | "DELETE",
  urlData?: string,
  body?: any,
  params?: any,
  header?: any
) => {
  // const accessToken = useAppSelector(
  //   (state: RootState) => state?.user?.accessToken
  // );
  const url = `${baseURL}${urlData}`;
  const headers = header ? header : {};
  headers.showDummy = header?.dummy || "";
  console.log("store.getState()", store.getState().auth.token);
  if (store.getState().auth.token) {
    headers["Authorization"] = "Bearer " + store.getState().auth.token;
  }
  if (urlData === "projects/create") {
    headers["content-type"] = "multipart/form-data";
  }
  const axiosObj = {
    method: method,
    url: url,
    data: params,
    headers: headers,
  };

  if (method === "POST") {
    return axios.post(url, body, { headers: headers });
  }
  return axios(axiosObj);
};

export default AxiosApi;

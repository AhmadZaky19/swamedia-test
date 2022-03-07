import axios from "axios";

const axiosApiInstances = axios.create({
  baseURL: `${process.env.REACT_APP_URL_BACKEND}`,
});

// Add a request interceptor
axiosApiInstances.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      Authorization:
        "Bearer 8455c5d5685200059c36aa9783ae516f26ce651715cffba3b5a4095490a6ecca",
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosApiInstances.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosApiInstances;

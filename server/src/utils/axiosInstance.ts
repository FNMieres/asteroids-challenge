import axios, { AxiosError } from "axios";

export const asteroidsAPI = axios.create({
  baseURL: "https://api.nasa.gov/neo/rest",
});

asteroidsAPI.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      API_KEY: process.env.NASA_API_KEY,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

interface NasaError {
  code?: string;
  error_message?: string;
}

asteroidsAPI.interceptors.response.use(
  (res) => res,
  (error: AxiosError<NasaError>) => {
    if (error.response) {
      const { status, statusText, data } = error.response;

      const handledError = {
        statusCode: data.code || status,
        message: data.error_message || statusText,
      };

      return Promise.reject(handledError);
    } else if (error.request) {
      const handledError = {
        statusCode: 500,
        message: "Network Error: Unable to make a request to the server",
      };

      return Promise.reject(handledError);
    } else {
      const handledError = {
        statusCode: 400,
        message: "Request Error: Unable to process the request",
      };

      return Promise.reject(handledError);
    }
  }
);

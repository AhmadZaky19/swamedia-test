import axios from "../../utils/axios";

export const get = (API_KEY) => {
  return {
    type: "GET",
    payload: axios.get(
      `/top-headlines?country=id&category=entertainment&apiKey=${API_KEY}`
    ),
  };
};

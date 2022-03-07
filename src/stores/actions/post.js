import axios from "../../utils/axios";

export const login = (data) => {
  return {
    type: "POST",
    payload: axios.post("/", data),
  };
};

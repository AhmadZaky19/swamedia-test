import axios from "../../utils/axios";

export const post = (data) => {
  return {
    type: "POST",
    payload: axios.post("/users", data),
  };
};

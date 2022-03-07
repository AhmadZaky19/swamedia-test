const initialState = {
  idUser: "",
  isError: false,
  isLoading: false,
  msg: "",
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case "POST_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: "",
      };
    }
    case "POST_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    }
    case "POST_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        idUser: "",
        msg: action.payload.response.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default posts;

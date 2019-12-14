const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("LOGIN_ERROR");
      return {
        ...state,
        authError: action.err.message
      };

    case "LOGIN_SUCCESS":
      console.log("LOGIN_SUCCESS");

      return {
        ...state,
        authError: null
      };

    case "LOGOUT_SUCCESS":
      console.log("LOGOUT_SUCCESS");
      break;

    case "REGISTER_SUCCESS":
      console.log("REGISTER_SUCCESS");

      return {
        ...state,
        authError: null
      };

    case "REGISTER_ERROR":
      console.log("REGISTER_ERROR");

      return {
        ...state,
        authError: action.err.message
      };

    case "FB_REGISTER_SUCCESS":
      console.log("FB_REGISTER_SUCCESS");

      return {
        ...state,
        authError: null
      };

    case "FB_LOGIN_SUCCESS":
      console.log("FB_LOGIN_SUCCESS");

      return {
        ...state,
        authError: null
      };

    case "FB_LOGIN_ERROR":
      console.log("FB_LOGIN_ERROR");

      return {
        ...state,
        authError: action.err.message
      };

    default:
  }

  return state;
};

export default authReducer;

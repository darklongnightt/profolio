const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login fail");
      return {
        ...state,
        authError: "Login Failed!"
      };

    case "LOGIN_SUCCESS":
      console.log("login ok");

      return {
        ...state,
        authError: null
      };

    case "LOGOUT_SUCCESS":
      console.log("logout ok");
      break;

    default:
  }

  return state;
};

export default authReducer;

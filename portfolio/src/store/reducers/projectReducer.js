const initState = {
  projects: [
    { id: 0, title: "Dummy Title", content: "Dummy Content" },
    { id: 1, title: "Dummy Title", content: "Dummy Content" },
    { id: 2, title: "Dummy Title", content: "Dummy Content" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("CREATE_PROJECT", action.project);
      break;
    case "CREATE_PROJECT_ERROR":
      console.log("CREATE_PROJECT_ERROR", action.err);
      break;
    case "DELETE_PROJECT":
      console.log("DELETE_PROJECT", action.project);
      break;
    case "DELETE_PROJECT_ERROR":
      console.log("DELETE_PROJECT_ERROR", action.err);
      break;
    default:
  }

  return state;
};

export default projectReducer;

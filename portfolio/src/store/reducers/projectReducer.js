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
      console.log("Reducer - Created Project", action.project);
      break;
    case "CREATE_PROJECT_ERROR":
      console.log("Reducer - Create Project Error", action.err);
      break;
    default:
  }

  return state;
};

export default projectReducer;

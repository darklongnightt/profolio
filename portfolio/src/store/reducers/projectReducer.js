const initState = {
  projects: [
    { id: 0, title: "superdata", content: "ecommerce" },
    { id: 1, title: "superdata", content: "ecommerce" },
    { id: 2, title: "superdata", content: "ecommerce" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Reducer - Created Project", action.project);
      break;
  }
  return state;
};

export default projectReducer;

const initState = {
    employments: [
      { id: 0, title: "Dummy Title", content: "Dummy Content" },
      { id: 1, title: "Dummy Title", content: "Dummy Content" },
      { id: 2, title: "Dummy Title", content: "Dummy Content" }
    ]
  };
  
  const employmentReducer = (state = initState, action) => {
    switch (action.type) {
      case "CREATE_EMPLOYMENT":
        console.log("CREATE_EMPLOYMENT", action.employment);
        break;
      case "CREATE_EMPLOYMENT_ERROR":
        console.log("CREATE_EMPLOYMENT_ERROR", action.err);
        break;
      case "DELETE_EMPLOYMENT":
        console.log("DELETE_EMPLOYMENT", action.employment);
        break;
      case "DELETE_EMPLOYMENT_ERROR":
        console.log("DELETE_EMPLOYMENT_ERROR", action.err);
        break;
      case "EDIT_EMPLOYMENT":
        console.log("EDIT_EMPLOYMENT", action.employment);
        break;
      case "EDIT_EMPLOYMENT_ERROR":
        console.log("EDIT_EMPLOYMENT_ERROR", action.err);
        break;
      default:
    }
  
    return state;
  };
  
  export default employmentReducer;
  
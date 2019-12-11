const initState = {
    educations: [
      { id: 0, title: "Dummy Title", content: "Dummy Content" },
      { id: 1, title: "Dummy Title", content: "Dummy Content" },
      { id: 2, title: "Dummy Title", content: "Dummy Content" }
    ]
  };
  
  const educationReducer = (state = initState, action) => {
    switch (action.type) {
      case "CREATE_EDUCATION":
        console.log("CREATE_EDUCATION", action.education);
        break;
      case "CREATE_EDUCATION_ERROR":
        console.log("CREATE_EDUCATION_ERROR", action.err);
        break;
      case "DELETE_EDUCATION":
        console.log("DELETE_EDUCATION", action.education);
        break;
      case "DELETE_EDUCATION_ERROR":
        console.log("DELETE_EDUCATION_ERROR", action.err);
        break;
      case "EDIT_EDUCATION":
        console.log("EDIT_EDUCATION", action.education);
        break;
      case "EDIT_EDUCATION_ERROR":
        console.log("EDIT_EDUCATION_ERROR", action.err);
        break;
      default:
    }
  
    return state;
  };
  
  export default educationReducer;
  
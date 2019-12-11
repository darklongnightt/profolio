const initState = {
    customs: [
      { id: 0, title: "Dummy Title", content: "Dummy Content" },
      { id: 1, title: "Dummy Title", content: "Dummy Content" },
      { id: 2, title: "Dummy Title", content: "Dummy Content" }
    ]
  };
  
  const customReducer = (state = initState, action) => {
    switch (action.type) {
      case "CREATE_CUSTOM":
        console.log("CREATE_CUSTOM", action.custom);
        break;
      case "CREATE_CUSTOM_ERROR":
        console.log("CREATE_CUSTOM_ERROR", action.err);
        break;
      case "DELETE_CUSTOM":
        console.log("DELETE_CUSTOM", action.custom);
        break;
      case "DELETE_CUSTOM_ERROR":
        console.log("DELETE_CUSTOM_ERROR", action.err);
        break;
      case "EDIT_CUSTOM":
        console.log("EDIT_CUSTOM", action.custom);
        break;
      case "EDIT_CUSTOM_ERROR":
        console.log("EDIT_CUSTOM_ERROR", action.err);
        break;
      default:
    }
  
    return state;
  };
  
  export default customReducer;
  
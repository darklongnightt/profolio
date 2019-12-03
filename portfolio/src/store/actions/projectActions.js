export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async db call then dispatch state
    const firestore = getFirestore();
    firestore.collection('projects').add({
        ...project,
        firstName: "Xav",
        lastName: "XK",
        userId: 123455,
        createdAt: new Date()
    }).then(()=>{
        dispatch({ type: "CREATE_PROJECT", project });
    }).catch((err)=> {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
    })

  };
};

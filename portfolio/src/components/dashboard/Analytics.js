import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";
import TodayViews from "./TodayViews";

const Analytics = props => {
  const { views } = props;

  if (views && views.length) {
    const todayViews = getTodayViews(views);
    return <TodayViews views={todayViews} />;
  } else {
    return <TodayViews views={0} />;
  }
};

const getTodayViews = views => {
  const today = moment().format("YYYY-MM-DD");
  const todayViews = views.find(elems => elems.date === today).count;
  return todayViews;
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    views: state.firestore.ordered.views
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [
      {
        collection: "users",
        doc: props.auth.uid,
        subcollections: [{ collection: "views" }],
        orderBy: ["date", "desc"],
        storeAs: "views"
      }
    ];
  })
)(Analytics);

import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";
import TodayViews from "./TodayViews";
import Visualization from "./Visualization";

const Analytics = props => {
  const { views } = props;

  if (views && views.length) {
    const todayViews = getTodayViews(views);
    return (
      <div className="card z-depth-0 modal-container">
        <div className="card-content center">
          <h5 className="bold">Profile Analytics</h5>
          <Visualization viewsData={views} />
          <div className="divider"></div>
          <TodayViews views={todayViews} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="card z-depth-0 modal-container">
        <div className="card-content center">
          <TodayViews views={0} />
        </div>
      </div>
    );
  }
};

const getTodayViews = views => {
  const today = moment().format("YYYY-MM-DD");
  const todayViews = views.find(elems => elems.id === today);
  return todayViews === undefined ? 0 : todayViews.count;
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
        orderBy: ["date"],
        storeAs: "views"
      }
    ];
  })
)(Analytics);

import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import M from "materialize-css";

class ManageProjects extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems, {});
  }

  render() {
    console.log(this.props);
    return (
      <div className="section container center">
        <ul className="collapsible z-depth-0">
          <li>
            <div className="collapsible-header">
              <i className="material-icons">filter_drama</i>First
            </div>
            <div className="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">place</i>Second
            </div>
            <div className="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">whatshot</i>Third
            </div>
            <div className="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [
      {
        collection: "users",
        doc: props.auth.uid,
        subcollections: [{ collection: "projects" }],
        orderBy: ["createdAt", "desc"],
        storeAs: "projects"
      }
    ];
  })
)(ManageProjects);

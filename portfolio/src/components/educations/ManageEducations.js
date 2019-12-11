import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ManageEducation from "./ManageEducation";
import CreateEducation from "./CreateEducation";
import { deleteEducation } from "../../store/actions/educationActions";
import { editEducation } from "../../store/actions/educationActions";
import { createEducation } from "../../store/actions/educationActions";

class ManageEducations extends Component {
  handleDelete = educationId => {
    this.props.deleteEducation(educationId);
  };

  handleEdit = education => {
    this.props.editEducation(education);
  };

  handleCreate = education => {
    this.props.createEducation(education);
    this.props.onCloseModal();
  };

  render() {
    const { educations, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="section">
        <ul className="collapsible z-depth-0">
          <li className="disabled">
            <div className="collapsible-header grey darken-2 white-text center">
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              Educations
            </div>
            <div className="collapsible-body">
              <p>Disabled</p>
            </div>
          </li>

          {educations &&
            educations.map(education => {
              return (
                <li key={education.id}>
                  <div className="collapsible-header">
                    {education.institute}
                    <i className="material-icons right">arrow_drop_down</i>
                  </div>

                  <div className="collapsible-body">
                    <ManageEducation
                      onDelete={this.handleDelete}
                      onEdit={this.handleEdit}
                      education={education}
                    />
                  </div>
                </li>
              );
            })}

          <li className="disabled">
            <div
              className="collapsible-header modal-trigger blue lighten-3 white-text flow-text add-icon center waves-effect waves-light"
              href="#newEducation"
            >
              <i className="material-icons">add</i>
            </div>
            <div className="collapsible-body">
              <p>Disabled</p>
            </div>
          </li>
        </ul>

        <div id="newEducation" className="modal modal-container">
          <div className="modal-content">
            <CreateEducation onCreate={this.handleCreate} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    educations: state.firestore.ordered.educations,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteEducation: educationId => dispatch(deleteEducation(educationId)),
    editEducation: education => dispatch(editEducation(education)),
    createEducation: education => dispatch(createEducation(education))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => {
    return [
      {
        collection: "users",
        doc: props.auth.uid,
        subcollections: [{ collection: "educations" }],
        orderBy: ["createdAt", "desc"],
        storeAs: "educations"
      }
    ];
  })
)(ManageEducations);

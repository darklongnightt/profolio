import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ManageEmployment from "./ManageEmployment";
import CreateEmployment from "./CreateEmployment";
import { deleteEmployment } from "../../store/actions/employmentActions";
import { editEmployment } from "../../store/actions/employmentActions";
import { createEmployment } from "../../store/actions/employmentActions";

class ManageEmployments extends Component {
  handleDelete = employmentId => {
    this.props.deleteEmployment(employmentId);
  };

  handleEdit = employment => {
    this.props.editEmployment(employment);
  };

  handleCreate = employment => {
    this.props.createEmployment(employment);
    this.props.onCloseModal();
  };

  render() {
    const { employments, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="section container">
        <ul className="collapsible z-depth-0">
          <li className="disabled">
            <div className="collapsible-header grey darken-2 white-text center">
              Employments
            </div>
            <div className="collapsible-body">
              <p>Disabled</p>
            </div>
          </li>

          {employments &&
            employments.map(employment => {
              return (
                <li key={employment.id}>
                  <div className="collapsible-header">
                    {employment.title}
                    <i className="material-icons right">arrow_drop_down</i>
                  </div>

                  <div className="collapsible-body">
                    <ManageEmployment
                      onDelete={this.handleDelete}
                      onEdit={this.handleEdit}
                      employment={employment}
                    />
                  </div>
                </li>
              );
            })}

          <li className="disabled">
            <div
              className="collapsible-header modal-trigger blue lighten-3 white-text flow-text add-icon center waves-effect waves-light"
              href="#newEmployment"
            >
              <i className="material-icons">add</i>
            </div>
            <div className="collapsible-body">
              <p>Disabled</p>
            </div>
          </li>
        </ul>

        <div id="newEmployment" className="modal modal-container">
          <div className="modal-content">
            <CreateEmployment onCreate={this.handleCreate} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    employments: state.firestore.ordered.employments,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteEmployment: employmentId => dispatch(deleteEmployment(employmentId)),
    editEmployment: employment => dispatch(editEmployment(employment)),
    createEmployment: employment => dispatch(createEmployment(employment))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => {
    return [
      {
        collection: "users",
        doc: props.auth.uid,
        subcollections: [{ collection: "employments" }],
        orderBy: ["createdAt", "desc"],
        storeAs: "employments"
      }
    ];
  })
)(ManageEmployments);

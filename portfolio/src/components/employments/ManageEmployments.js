import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import M from "materialize-css";
import ManageEmployment from "./ManageEmployment";
import CreateEmployment from "./CreateEmployment";
import { deleteEmployment } from "../../store/actions/employmentActions";
import { editEmployment } from "../../store/actions/employmentActions";
import { createEmployment } from "../../store/actions/employmentActions";

class ManageEmployments extends Component {
  state = {
    modal: "",
    collapsible: ""
  };

  componentDidMount() {
    //Init and store all materialize elements
    var collaps = document.querySelectorAll(".collapsible");
    var collapsInstance = M.Collapsible.init(collaps, {});

    var modal = document.querySelector(".modal");
    var modalInstance = M.Modal.init(modal, {});
    this.setState({
      modal: modalInstance,
      collapsible: collapsInstance
    });
  }

  handleDelete = employmentId => {
    this.props.deleteEmployment(employmentId);
  };

  handleEdit = employment => {
    this.props.editEmployment(employment);
    this.state.modal.close();
  };

  handleCreate = employment => {
    this.props.createEmployment(employment);
    this.state.modal.close();
  };

  render() {
    const { employments, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="section container">

        <ul className="collapsible z-depth-0">
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
        </ul>

        <div className="center">
          <a
            className="btn-floating btn-large waves-effect waves-light red lighten-2 z-depth-0 modal-trigger"
            href="#newEmployment"
          >
            <i className="material-icons">add</i>
          </a>
        </div>

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

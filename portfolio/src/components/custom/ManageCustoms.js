import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { deleteCustom } from "../../store/actions/customActions";
import { editCustom } from "../../store/actions/customActions";
import { createCustom } from "../../store/actions/customActions";
import ManageCustom from "./ManageCustom";
import CreateCustom from "./CreateCustom";
import M from "materialize-css";

class ManageCustoms extends Component {
  handleDelete = customId => {
    this.props.deleteCustom(customId);
    M.toast({ html: "Delete successful!" });
  };

  handleEdit = custom => {
    this.props.editCustom(custom);
    M.toast({ html: "Save successful!" });
  };

  handleCreate = custom => {
    this.props.createCustom(custom);
    this.props.onCloseModal();
    M.toast({ html: "Add successful!" });
  };

  render() {
    const { customs, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="section">
        <ul className="collapsible z-depth-0">
          <li className="disabled">
            <div className="collapsible-header grey darken-2 white-text center">
              <i className="fa fa-trophy" aria-hidden="true"></i>
              Custom Sections
            </div>
            <div className="collapsible-body">
              <p>Disabled</p>
            </div>
          </li>

          {customs && customs.length === 0 && (
            <li className="disabled">
              <div className="collapsible-header white grey-text center">
                Section Empty
              </div>
              <div className="collapsible-body">
                <p>Disabled</p>
              </div>
            </li>
          )}

          {customs &&
            customs.map(custom => {
              return (
                <li key={custom.id}>
                  <div className="collapsible-header">
                    {custom.title}
                    <i className="material-icons right">arrow_drop_down</i>
                  </div>

                  <div className="collapsible-body">
                    <ManageCustom
                      onDelete={this.handleDelete}
                      onEdit={this.handleEdit}
                      custom={custom}
                    />
                  </div>
                </li>
              );
            })}

          <li className="disabled">
            <div
              className="collapsible-header modal-trigger blue lighten-2 white-text flow-text add-icon center waves-effect waves-light"
              href="#newCustom"
            >
              <i className="material-icons">add</i>
            </div>
            <div className="collapsible-body">
              <p>Disabled</p>
            </div>
          </li>
        </ul>

        <div id="newCustom" className="modal modal-container">
          <div className="modal-content">
            <CreateCustom onCreate={this.handleCreate} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    customs: state.firestore.ordered.customs,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCustom: customId => dispatch(deleteCustom(customId)),
    editCustom: custom => dispatch(editCustom(custom)),
    createCustom: custom => dispatch(createCustom(custom))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => {
    return [
      {
        collection: "users",
        doc: props.auth.uid,
        subcollections: [{ collection: "customs" }],
        orderBy: ["createdAt", "desc"],
        storeAs: "customs"
      }
    ];
  })
)(ManageCustoms);

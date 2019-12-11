import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import M from "materialize-css";
import parallax1 from "../../img/p1.jpg";
import parallax2 from "../../img/p2.jpg";
import EducationSection from "./EducationSection";
import EmploymentSection from "./EmploymentSection";
import ProjectSection from "./ProjectSection";
import CustomSection from "./CustomSection";

class MainPage extends Component {
  state = {
    currentComponent: ""
  };

  componentDidMount() {
    M.AutoInit();
  }

  handleClick = component => {
    this.setState({
      currentComponent: component
    });
  };

  render() {
    const { educations, employments, customs, projects, user } = this.props;
    //console.log(this.props);
    console.log(educations);
    var component;

    // Renders section based on current state
    switch (this.state.currentComponent) {
      case "educations":
        component = <EducationSection educations={educations && educations} active={user.publishEducations} />;
        break;
      case "employments":
        component = (
          <EmploymentSection employments={employments && employments} active={user.publishEmployments}  />
        );
        break;
      case "projects":
        component = <ProjectSection projects={projects && projects} active={user.publishProjects} />;

        break;
      case "customs":
        component = <CustomSection customs={customs && customs} active={user.publishCustoms} />;

        break;
      case "default":
    }

    return (
      <React.Fragment>
        <div className="parallax-container">
          <div className="parallax">
            <img src={parallax1} />
          </div>
        </div>
        <div className="section white">
          <div className="row">
            <div className="col m3 s3 center">
              <button
                className="btn-floating btn-large waves-effect waves-light red lighten-2 parallax-top"
                onClick={() => this.handleClick("educations")}
              >
                <i className="material-icons">school</i>
              </button>
            </div>

            <div className="col m3 s3 center">
              <a
                className="btn-floating btn-large waves-effect waves-light blue lighten-1 parallax-top"
                onClick={() => this.handleClick("employments")}
              >
                <i className="material-icons">business_center</i>
              </a>
            </div>

            <div className="col m3 s3 center">
              <a
                className="btn-floating btn-large waves-effect waves-light green lighten-1 parallax-top"
                onClick={() => this.handleClick("projects")}
              >
                <i className="material-icons">developer_mode</i>
              </a>
            </div>

            <div className="col m3 s3 center">
              <a
                className="btn-floating btn-large waves-effect waves-light yellow darken-2 parallax-top"
                onClick={() => this.handleClick("customs")}
              >
                <i className="fa fa-trophy" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="row container">{component}</div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src={parallax2} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const users = state.firestore.data.users;
  const user = users && users[id];

  return {
    user: user,
    educations: state.firestore.ordered.educations,
    employments: state.firestore.ordered.employments,
    projects: state.firestore.ordered.projects,
    customs: state.firestore.ordered.customs
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [
      {
        collection: "users",
        doc: props.match.params.id
      },
      {
        collection: "users",
        doc: props.match.params.id,
        subcollections: [{ collection: "educations" }],
        orderBy: ["createdAt", "desc"],
        storeAs: "educations"
      },
      {
        collection: "users",
        doc: props.match.params.id,
        subcollections: [{ collection: "employments" }],
        orderBy: ["createdAt", "desc"],
        storeAs: "employments"
      },
      {
        collection: "users",
        doc: props.match.params.id,
        subcollections: [{ collection: "projects" }],
        orderBy: ["createdAt", "desc"],
        storeAs: "projects"
      },
      {
        collection: "users",
        doc: props.match.params.id,
        subcollections: [{ collection: "customs" }],
        orderBy: ["createdAt", "desc"],
        storeAs: "customs"
      }
    ];
  })
)(MainPage);

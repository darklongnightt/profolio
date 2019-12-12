import React, { Component } from "react";
import { connect } from "react-redux";
import { uploadPhoto } from "../../store/actions/profileActions";
import profile_placeholder from "../../img/profile_placeholder.png";
import M from "materialize-css";

class PhotoUpload extends Component {
  state = {
    photo: null,
    preview: null
  };

  handleChange = e => {
    if (e.target.files[0]) {
      const photo = e.target.files[0];
      this.setState(() => ({
        photo: photo,
        preview: URL.createObjectURL(photo)
      }));
    }
  };

  handleUpload = () => {
    const { photo } = this.state;
    this.props.uploadPhoto(photo);
    M.toast({ html: "Save profile successful!" });
  };

  render() {
    const { profile } = this.props;
    return (
      <div>
        <div className="file-field input-field">
          <div className="hover-container circle ">
            <img
              src={
                this.state.preview || profile.photoUrl || profile_placeholder
              }
              alt="Uploaded Images"
              className="circle"
              height="250"
              width="250"
            />

            <div className="overlay ">
              <div className="hover-text">
                <i className="fa fa-camera" aria-hidden="true"></i>
              </div>
            </div>

            <input type="file" onChange={this.handleChange}></input>
          </div>
        </div>

        <button
          onClick={this.handleUpload}
          className="btn z-depth-0 blue darken-2 form-btn waves-effect waves-light"
        >
          <i className="fa fa-cloud-upload" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    uploadPhoto: photo => dispatch(uploadPhoto(photo))
  };
};

export default connect(null, mapDispatchToProps)(PhotoUpload);

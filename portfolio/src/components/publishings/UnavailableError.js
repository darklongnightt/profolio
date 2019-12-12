import React from "react";
import error from "../../img/error.png";

const UnavailableError = () => {
  return (
    <div className="center brand-text grey-text">
      <h5>This is section is currently unavailable!</h5>
      <br />
      <img src={error} className="modal-container" />
    </div>
  );
};

export default UnavailableError;

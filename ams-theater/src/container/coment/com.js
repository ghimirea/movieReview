import React from "react";

import "./com.css";

const com = (props) => {
  return (
    <form className="form-group">
      <div className=" container form-group">
        <label for="exampleInputEmail1" className="text-warning ">
          Add it
        </label>
        <textarea className="form-control container  col-md-4 mb-3 " />
        <button
          type="submit"
          className="form-control  col-md-4 mb-3 btn btn-outline-warning"
        >
          Add-Comment
        </button>
      </div>
    </form>
  );
};

export default com;

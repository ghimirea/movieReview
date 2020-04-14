import React from "react";

const com = (props) => {
  return (
    <div>
      <form>
        <div class=" form-row">
          <div class=" form-row col-md-4 mb-3">
            <label for="validationServer01" style={{color:"white"}}>Comments</label>
            <textarea
              type="text"
              class="form-control is-valid"
              id="validationServer01"
              placeholder=""
              required
            />
          </div>
        </div>

        <button class=" btn-outline-warning" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default com;

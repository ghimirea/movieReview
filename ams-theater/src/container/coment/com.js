import React from 'react';

const com = (props) => {
    return (
        <div >
            <form  >
                <div class=" form-row">
                    <div class=" form-row col-md-4 mb-3">
                        <label for="validationServer01">Comments</label>
                        <textarea type="text" class="form-control is-valid" id="validationServer01" placeholder="" required />

                    </div>


                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="validationServer03">First Name </label>
                        <input type="text" class="form-control " id="validationServer03" placeholder="First Name" required />

                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationServer03">Last Name</label>
                        <input type="text" class="form-control " id="validationServer03" placeholder="Last Name" required />

                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationServer03">Email</label>
                        <input type="text" class="form-control " id="validationServer03" placeholder="Email" required />

                    </div>


                </div>
                {/* <div class="form-group">

                </div> */}
                <button class=" btn-outline-warning" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default com;

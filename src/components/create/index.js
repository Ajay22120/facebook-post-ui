import React from "react";
import "./create.css";
import AddImage from "../../assets/plus.png";

const Create = () => {
 
  return (
    <React.Fragment>
      <div className="card card-layout">
        <div className="card-child">
          <div className="card-header">
            <img
              src={AddImage}
              className="add-button"
              alt="Add_Image"
              data-toggle="modal"
              data-target="#exampleModal"
            />
            <div className="create-post-status">
              <h4 className="card-title d-block">Create a Story</h4>
              <h5 className="card-date d-block">
                Share a photo or write something
              </h5>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Create;

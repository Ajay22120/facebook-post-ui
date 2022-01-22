import React from "react";
import "./post.css";
import Profile from "../../assets/Group1.png";
const Post = () => {
  return (
    <div>
      <div className="card">
        <img src={Profile} className="profile-img" alt="..." />
        <div className="card-body">
          <h4 className="card-title">Jack White</h4>
          <h5 className="card-date">6 April at 21:30</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          className="card-img-top"
          alt="..."
        />
      </div>
    </div>
  );
};

export default Post;

import React from "react";
import "./post.css";
import Profile from "../../assets/Group1.png";
import Menu from "../../assets/option.png";
const Post = () => {
  const postImg =
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80";
  return (
    <React.Fragment>
      <div className="card card-layout">
        <div className="card-child">
          <div className="card-header">
            <img src={Profile} className="profile-img" alt="..." />
            <div className="post-pf-status">
              <h4 className="card-title d-block">Jack White</h4>
              <h5 className="card-date d-block">6 April at 21:30</h5>
            </div>
            <div className="post-option">
              <img src={Menu} className="menu-img" alt="option" />
            </div>
          </div>
          <div className="card-body">
            <p className="card-text">
              "Some quick example text to build on the card title and make up
              the bulk of the card's content."
            </p>
          </div>
          <img src={postImg} className="post-img" alt="PostImg" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Post;

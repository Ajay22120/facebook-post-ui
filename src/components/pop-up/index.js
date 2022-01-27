import React from "react";
import "./pop-up.css";


const Create = () => {
 
  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title modal-menus" id="exampleModalLabel">
                Compose Post
              </h6>
              <span>|</span>
              <h6 className="modal-title modal-menus" id="exampleModalLabel">
                Photo/Video Album
              </h6>
              <span>|</span>
              <h6 className="modal-title modal-menus" id="exampleModalLabel">
                Live Video
              </h6>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body clicked">
              <div class="imtcontainer area">
                <div class="img">
                  <img src="http://themarketmogul.com/wp-content/uploads/avatars/3321/cb72c2d6008ea815d74b7f27d1131a26-bpfull-180x180.jpg" alt="dummy-img" />
                </div>
                <div class="textarea">
                  <textarea
                    onkeyup="InputAdjust(this)"
                    placeholder=" what's in your mind?"
                    style={{ height: 90 }}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="modal-buttons">
              <button class="loginBtn loginBtn--facebook" >Tag Friends</button>
              <span>|</span>
              <button class="loginBtn loginBtn--facebook">Check in</button>
             
              <button class="loginBtn loginBtn--facebook" data-toggle="modal"
              data-target="#exampleGifModal">Gif</button>
              <span>|</span>
              <button class="loginBtn loginBtn--facebook">Tag event</button> 
            </div>
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Create;

import React, {useState} from "react";
import "./gif-popup.css";
import profile from "../../assets/Group1.png";

const Create = () => {
  const [gifList, setGifList] = useState([])
  const postImg =
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80";

  const handleGif = (e) => { 
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=Gdahp6aoR93zTjBuKUZhRRXHOIc7Zicu&q=${e.target.value}&limit=5&offset=0&rating=g&lang=en`)
        .then(response => response.json())
        .then(data =>  setGifList(data));
  }
  return (
    <React.Fragment>
      <div
        className="modal fade gif-modal"
        id="exampleGifModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleGifModal"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content gif-modal">
            <div className="modal-header">
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
              <div className="imtcontainer area">
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Search:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onBlur={handleGif}
                  />
                </div>
              </div>
             <div className="gift-list">
             {
                    'data' in gifList &&
                    gifList.data.map(({images})=> {
                      console.log(images)
                      return <img src={images.original.webp} className="w-100" alt="loading..." />

                    })
                  }
             </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Create;

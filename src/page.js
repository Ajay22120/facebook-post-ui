import React from 'react'
import Post from './components/post2/index';
import Create from './components/create/index';
import Popup from './components/pop-up/index';
import GifPopup from './components/gif-pop/index';

const Page = () => {
    return (
      <React.Fragment>
        <Create />
        <Popup />
        <GifPopup />
        <Post />
        {/* <Post /> */}
      </React.Fragment>
    );
}

export default Page;

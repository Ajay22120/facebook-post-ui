import React from 'react'
import Post from './components/post2/index';
import Create from './components/create/index';

const Page = () => {
    return(
        <React.Fragment>
            <Create />
           <Post />
        </React.Fragment>
    )
}

export default Page;

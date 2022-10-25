import { useEffect, useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [postNames, setPosts] = useState([]);

    function handleClick(val) {
        setPosts(oldArr => [val, ...oldArr]);
    }

    const posts = postNames.map((objName) => <Block color={objName} />);

    return (
        <div>
            <Menu handler={handleClick} />

            {posts}
        </div>
    );
}

export default Feed;



import React, { useState } from 'react';
import { TimelineFriendContext } from './TimelineFriendContext';


const TimelineFriendProvider = ({ children }) => {
    const [timelineFriend, setTimelineFriends] = useState([])
    
    const data = {
        timelineFriend,
        setTimelineFriends
    }
    return (
        <div>
            <TimelineFriendContext.Provider value={data}>{children}</TimelineFriendContext.Provider>
        </div>
    );
};

export default TimelineFriendProvider;
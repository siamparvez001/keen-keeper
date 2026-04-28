import React, { useContext } from 'react';
import { TimelineFriendContext } from '../../context/TimelineFriendContext';
import { PiPhoneCall } from "react-icons/pi";
import { BsChatSquareText } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";


const Timeline = () => {
    const { timelineFriend, setTimelineFriends } = useContext(TimelineFriendContext)
    console.log(timelineFriend)
    return (
        <div className='mx-10'>
            <div className='container mx-auto my-10'>

                {
                    timelineFriend.length > 0 ? (
                        <>
                            <h1 className='text-2xl font-semibold'>Timeline</h1>

                            {
                                timelineFriend.map((item, ind) => {

                                    let icon, label;

                                    if (item.type === "call") {
                                        icon = <PiPhoneCall />;
                                        label = "Call";
                                    }
                                    else if (item.type === "text") {
                                        icon = <BsChatSquareText />;
                                        label = "Text";
                                    }
                                    else {
                                        icon = <IoVideocamOutline />;
                                        label = "Video";
                                    }

                                    return (
                                        <div key={ind} className="flex items-center gap-5 px-5 py-3 shadow-[0_0_25px_rgba(0,0,0,0.15)] rounded-2xl my-5">

                                            <div className="text-2xl">{icon}</div>

                                            <div>
                                                <p className="text-xl">
                                                    <span className='font-semibold'>{label}</span> with {item.name}
                                                </p>
                                                <p>{item.next_due_date}</p>
                                            </div>

                                        </div>
                                    );
                                })
                            }
                        </>
                    ) : (
                        <p className="text-center text-4xl font-bold mt-10">
                            No timeline found
                        </p>
                    )
                }

            </div>
        </div>
    );
};

export default Timeline;
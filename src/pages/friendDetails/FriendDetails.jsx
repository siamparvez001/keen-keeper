
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HiBellSnooze } from "react-icons/hi2";
import { FiArchive } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import { BsChatSquareText } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";
import { RingLoader } from 'react-spinners';
import { TimelineFriendContext } from '../../context/TimelineFriendContext';
import { toast } from "react-toastify";

const FriendDetails = () => {

    const { timelineFriend, setTimelineFriends } = useContext(TimelineFriendContext)



    const { id } = useParams();
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/friendsData.json');
            const data = await res.json();

            setFriends(data);
            setLoading(false);
        };

        fetchData();
    }, []);
    const expectedFriend = friends.find(
        (friend) => String(friend.id) === id
    );



    const handleTimelineFriend = (type) => {
        const newEvent = {
            ...expectedFriend,
            type,
            date: new Date().toLocaleString()
        };

        setTimelineFriends((prev) => {
            return [...prev, newEvent];
        });

        if (type === "call") {
            toast.success(`Call with ${expectedFriend.name}`);
        }
        else if (type === "text") {
            toast.success(`Text with ${expectedFriend.name}`);
        }
        else if (type === "video") {
            toast.success(`Video call with ${expectedFriend.name}`);
        }
    };



    if (loading) return <div className="flex justify-center items-center    my-20">
        <RingLoader color="#064e3b" />
    </div>;
    if (!expectedFriend) return <p>Friend not found</p>;





    return (
        <div className='mx-10'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 my-10'>

                <div className='md:col-span-1'>
                    <div className='shadow-[0_0_25px_rgba(0,0,0,0.15)] px-5 py-8 flex flex-col justify-center items-center space-y-3'>
                        <div>
                            <img src={expectedFriend.picture} alt="" className='w-[150px] h-[150px] object-cover rounded-full' />
                        </div>
                        <p>{expectedFriend.name}</p>
                        <p
                            className={`mt-2 px-3 py-1 rounded-2xl text-white inline-block ${expectedFriend.status === "overdue"
                                ? "bg-red-600"
                                : expectedFriend.status === "almost due"
                                    ? "bg-yellow-600"
                                    : "bg-green-950"
                                }`}
                        >
                            {expectedFriend.status}
                        </p>
                        <div className="mt-3 flex text-xs whitespace-nowrap justify-center gap-2 px-2">
                            {
                                expectedFriend.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="bg-green-100 text-black px-2 py-1 rounded text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))
                            }
                        </div>
                        <p className='opacity-80'>"{expectedFriend.bio}"</p>
                        <p className='opacity-60'>Preferred: {expectedFriend.email}</p>

                    </div>
                    <div className='flex flex-col gap-5 my-5'>
                        <div className='btn px-5 py-2 w-full'>
                            <HiBellSnooze></HiBellSnooze>
                            <p>Snooze 2 weeks</p>
                        </div>
                        <div className='btn px-5 py-2 w-full'>
                            <FiArchive></FiArchive>
                            <p>Archive</p>
                        </div>
                        <div className='btn px-5 py-2 w-full'>
                            <MdOutlineDeleteOutline color='red'></MdOutlineDeleteOutline>
                            <p className='text-red-400'>Delete</p>
                        </div>
                    </div>
                </div>
                <div className='md:col-span-3 space-y-5'>
                    <div className='flex gap-5'>
                        <div className='flex flex-col justify-center items-center px-7 py-10 shadow-[0_0_25px_rgba(0,0,0,0.15)] w-full rounded-2xl'>
                            <h1 className='text-2xl font-semibold'>{expectedFriend.days_since_contact}</h1>
                            <p className='opacity-70 text-center'>Days Since Contact</p>
                        </div>
                        <div className='flex flex-col justify-center items-center px-7 py-10 shadow-[0_0_25px_rgba(0,0,0,0.15)] w-full rounded-2xl'>
                            <h1 className='text-2xl font-semibold'>{expectedFriend.goal}</h1>
                            <p className='opacity-70 text-center'>Goal (Days)</p>
                        </div>
                        <div className='flex flex-col justify-center items-center px-7 py-10 shadow-[0_0_25px_rgba(0,0,0,0.15)] w-full rounded-2xl'>
                            <h1 className='text-2xl font-semibold'>{expectedFriend.next_due_date}</h1>
                            <p className='opacity-70 text-center'>Next Due</p>
                        </div>
                    </div>
                    <div className='shadow-[0_0_25px_rgba(0,0,0,0.15)] px-20 py-10 rounded-2xl'>
                        <div className='flex justify-between '>
                            <p className='text-xl font-semibold'>Relationship Goal</p>
                            <button className='btn'>Edit</button>
                        </div>
                        <div>
                            <p className='text-xl opacity-70'>Connect every <span className='text-xl font-bold'> {expectedFriend.goal} days</span></p>
                        </div>
                    </div>
                    <div className='shadow-[0_0_25px_rgba(0,0,0,0.15)] bg-white px-20 py-10 rounded-2xl'>
                        <p className='mb-5'>Quick Check-In</p>
                        <div className='grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-10 '>
                            <button className='btn flex  justify-center items-center gap-3 px-10  bg-gray-100  rounded-xl' onClick={() => handleTimelineFriend("call")}>
                                <PiPhoneCall></PiPhoneCall>
                                <p>Call</p>
                            </button>
                            <button className='btn flex justify-center items-center gap-3 px-10 py-5 bg-gray-100  rounded-xl' onClick={() => handleTimelineFriend("text")}>
                                <BsChatSquareText></BsChatSquareText>
                                <p>Text</p>
                            </button>
                            <button className='btn flex justify-center items-center gap-3 px-10 py-5 bg-gray-100  rounded-xl' onClick={() => handleTimelineFriend("video")}>
                                <IoVideocamOutline></IoVideocamOutline>
                                <p>Video</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;
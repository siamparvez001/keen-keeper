import React, { use, useEffect, useState } from 'react';
import FriendsCard from '../../components/ui/FriendsCard';
import { RingLoader } from 'react-spinners';


// const friendsPromise = fetch('/friendsData.json').then((res) => res.json());
const Friends = () => {
    // const friends = use(friendsPromise)
    // console.log(friends)
    const [friends, setFriends] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/friendsData.json');
            const data = await res.json()
            setTimeout(() => {
                setFriends(data)
                setLoading(false)
            }, 2000);
        }
        fetchData();
    }, [])


    return (
        <div className='w-10/12 mx-auto my-10'>
            <h1 className='text-2xl font-semibold'>Your Friends</h1>
            <div>
                {loading ? (
                    <div className="flex justify-center items-center my-20">
                        <RingLoader color="#064e3b" />
                    </div>) : (
                    <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 py-8'>
                        {
                            friends.map((friend, ind) => {
                                return (
                                    <FriendsCard friend={friend} key={ind}></FriendsCard>
                                )
                            })
                        }
                    </div>)}
            </div>
        </div>
    );
};

export default Friends;
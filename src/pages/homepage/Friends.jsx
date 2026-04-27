import React, { use, useEffect } from 'react';


const friendsPromise = fetch('/friendsData.json').then((res) => res.json());


const Friends = () => {

    const friends = use(friendsPromise)
    console.log(friends)



    return (
        <div className='w-10/12 mx-auto my-10'>
            <h1 className='text-2xl font-semibold'>Your Friends</h1>
            <div>
                <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 py-8'>
                    {
                        friends.map(friend => (
                            <div key={friend.id} className='p-4 px-5 py-8 shadow-[0_0_25px_rgba(0,0,0,0.15)] rounded text-center space-y-2'>
                                <div className='flex justify-center'>
                                    <img src={friend.picture} alt={friend.name} className='w-[150px] h-[150px] object-cover rounded-full' />
                                </div>
                                <p className='font-bold'>{friend.name}</p>
                                <p>{friend.days_since_contact} d ago</p>
                                <div className="mt-3 flex flex-wrap justify-center gap-2">
                                    {
                                        friend.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="bg-green-100 text-black px-2 py-1 rounded text-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))
                                    }
                                </div>
                                <p
                                    className={`mt-2 px-3 py-1 rounded-2xl text-white inline-block ${friend.status === "overdue"
                                        ? "bg-red-600"
                                        : friend.status === "almost due"
                                            ? "bg-yellow-600"
                                            : "bg-green-950"
                                        }`}
                                >
                                    {friend.status}
                                </p>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Friends;
import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({ friend }) => {
    return (
        <Link to={`/friend/${friend.id}`}>
            <div className='p-4 px-5 py-8 shadow-[0_0_25px_rgba(0,0,0,0.15)] rounded text-center space-y-2 h-full'>
                <div className='flex justify-center'>
                    <img src={friend.picture} alt={friend.name} className='w-[150px] h-[150px] object-cover rounded-full' />
                </div>
                <p className='font-bold'>{friend.name}</p>
                <p>{friend.days_since_contact} d ago</p>
                <div className="mt-3 flex text-xs whitespace-nowrap justify-center gap-2 px-2">
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
        </Link>

    );
};

export default FriendsCard;
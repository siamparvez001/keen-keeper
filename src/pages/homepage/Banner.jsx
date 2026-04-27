import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto my-10'>
            <div>
                <div className='text-center flex flex-col items-center '>
                    <h1 className='text-green-950 text-4xl font-bold'>Friends to keep close in your life</h1>
                    <p className='mt-3 opacity-60'>Your personal shelf of meaningful connections. Browse, tend, and nurture the</p>
                    <p className='mb-3 opacity-60'>relationships that matter most.</p>
                    <button className='items-center  px-5 py-2 bg-green-900 text-white mt-2'>
                        <span>+  </span>
                        <span>Add a Friend</span>
                    </button>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 my-10 gap-10 w-10/12 mx-auto'>
                    <div className='flex flex-col justify-center items-center space-y-2 shadow-[0_0_25px_rgba(0,0,0,0.15)] rounded-2xl py-10 '>
                        <span className='text-2xl font-semibold'>12</span>
                        <span className='opacity-70'>Total Friends</span>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2 shadow-[0_0_25px_rgba(0,0,0,0.15)] rounded-2xl py-10 '>
                        <span className='text-2xl font-semibold'>3</span>
                        <span className='opacity-70'>On Track</span>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2 shadow-[0_0_25px_rgba(0,0,0,0.15)] rounded-2xl py-10 '>
                        <span className='text-2xl font-semibold'>6</span>
                        <span className='opacity-70'>Need Attention</span>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2 shadow-[0_0_25px_rgba(0,0,0,0.15)] rounded-2xl py-10 '>
                        <span className='text-2xl font-semibold'>14</span>
                        <span className='opacity-70'>Interactions This Month</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
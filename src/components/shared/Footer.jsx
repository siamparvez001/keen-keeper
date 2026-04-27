import React from 'react';
import fbImage from '../../assets/facebook.png'
import instaImage from '../../assets/instagram.png'
import twitterImage from '../../assets/twitter.png'

const Footer = () => {
    return (
        <div className='bg-green-900 text-white py-10'>
            <div className='text-center space-y-3 container mx-auto'>
                <h1 className='text-5xl font-bold'>KeenKeeper</h1>
                <p className='opacity-70'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div>
                    <p className='opacity-90'>Social Links</p>
                    <div className='flex justify-center items-center gap-2 pt-2'>
                        <img src={instaImage} alt="InstaImage" />
                        <img src={fbImage} alt="FaceBook" />
                        <img src={twitterImage} alt="Twitter" />
                    </div>
                </div>
                <div className='flex justify-between mt-15 opacity-60'>
                    <div>
                        <p>© 2026 KeenKeeper. All rights reserved.</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <p>Privacy Policy </p>
                        <p> Terms of Service </p>
                        <p>Cookies </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
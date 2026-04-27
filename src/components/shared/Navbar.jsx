import React from 'react';
import logo from '../../assets/logo.png'
import { RiHome2Line } from "react-icons/ri";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { NavLink } from 'react-router';
const Navbar = () => {
    return (
        <nav>
            <div className='flex justify-between items-center container mx-auto my-5'>
                <div>
                    <img src={logo} alt="KeenKeeper" />
                </div>
                <div className='flex'>

                    <NavLink to={'/'}  className={({ isActive }) =>
                            `font-semibold mr-2 ${isActive ? "bg-green-900 text-white rounded-xl" : ""}`
                        }>
                        <div className='flex justify-center items-center gap-2  px-5 py-2'>
                            <RiHome2Line></RiHome2Line>
                            <h1>Home</h1>
                        </div>
                    </NavLink>
                    <NavLink to={'/timeline'}  className={({ isActive }) =>
                            `font-semibold mr-2 ${isActive ? "bg-green-900 text-white rounded-xl" : ""}`
                        }>
                        <div className='flex justify-center items-center gap-2 px-5 py-2 '>
                            <RiTimeLine></RiTimeLine>
                            <h1>TimeLine</h1>
                        </div>
                    </NavLink>
                    <NavLink to={'/stats'}  className={({ isActive }) =>
                            `font-semibold mr-2 ${isActive ? "bg-green-900 text-white  rounded-xl" : ""}`
                        }>
                        <div className='flex justify-center items-center gap-2 px-5 py-2'>
                            <ImStatsDots></ImStatsDots>
                            <h1>Stats</h1>
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
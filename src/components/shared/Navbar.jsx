

import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import { RiHome2Line } from "react-icons/ri";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { CiMenuBurger } from "react-icons/ci";
import { NavLink } from 'react-router';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className=' sticky top-0 z-50 bg-white mx-10'>
            <div className="flex justify-between items-center container mx-auto py-5">
                <div>
                    <img src={logo} alt="KeenKeeper" />
                </div>
                <div className="hidden md:flex">

                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `font-semibold mr-2 ${isActive ? "bg-green-900 text-white rounded-xl" : ""}`
                        }
                    >
                        <div className='flex items-center gap-2 px-5 py-2'>
                            <RiHome2Line />
                            <h1>Home</h1>
                        </div>
                    </NavLink>

                    <NavLink to={'/timeline'} className={({ isActive }) =>
                        `font-semibold mr-2 ${isActive ? "bg-green-900 text-white rounded-xl" : ""}`
                    }>
                        <div className='flex items-center gap-2 px-5 py-2'>
                            <RiTimeLine />
                            <h1>Timeline</h1>
                        </div>
                    </NavLink>

                    <NavLink to={'/stats'} className={({ isActive }) =>
                        `font-semibold mr-2 ${isActive ? "bg-green-900 text-white rounded-xl" : ""}`
                    }>
                        <div className='flex items-center gap-2 px-5 py-2'>
                            <ImStatsDots />
                            <h1>Stats</h1>
                        </div>
                    </NavLink>

                </div>


                <div className="md:hidden mx-5">
                    <button onClick={() => setOpen(!open)}>
                        <CiMenuBurger></CiMenuBurger>
                    </button>
                </div>


                {
                    open && (
                        <div className="absolute right-5 top-16 flex flex-col bg-white shadow-lg rounded-xl p-3  md:hidden">

                            <NavLink
                                to="/"
                                end
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `font-semibold ${isActive ? "bg-green-900 text-white rounded-xl" : ""}`
                                }
                            >
                                <div className='flex items-center gap-2 px-5 py-2'>
                                    <RiHome2Line />
                                    <h1>Home</h1>
                                </div>
                            </NavLink>

                            <NavLink to={'/timeline'} onClick={() => setOpen(false)} className={({ isActive }) =>
                                `font-semibold ${isActive ? "bg-green-900 text-white rounded-xl" : ""}`
                            }>
                                <div className='flex items-center gap-2 px-5 py-2'>
                                    <RiTimeLine />
                                    <h1>Timeline</h1>
                                </div>
                            </NavLink>

                            <NavLink to={'/stats'} onClick={() => setOpen(false)} className={({ isActive }) =>
                                `font-semibold ${isActive ? "bg-green-900 text-white rounded-xl" : ""}`
                            }>
                                <div className='flex items-center gap-2 px-5 py-2'>
                                    <ImStatsDots />
                                    <h1>Stats</h1>
                                </div>
                            </NavLink>

                        </div>
                    )
                }

            </div>
        </div>

    );
};

export default Navbar;


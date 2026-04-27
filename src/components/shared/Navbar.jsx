// import React from 'react';
// import logo from '../../assets/logo.png'
// import { RiHome2Line } from "react-icons/ri";
// import { RiTimeLine } from "react-icons/ri";
// import { ImStatsDots } from "react-icons/im";
// import { NavLink } from 'react-router';
// const Navbar = () => {
//     return (
//         <div className="flex justify-between items-center container mx-auto py-5">
//             <div className="">

//                 <img src={logo} alt="KeenKeeper" />

//             </div>
//             <div className="hidden md:flex">
//                 <NavLink to={'/'} className={({ isActive }) =>
//                     `font-semibold mr-2 ${isActive ? "bg-green-900 text-white rounded-xl" : ""}`
//                 }>
//                     <div className='flex justify-center items-center gap-2  px-5 py-2'>
//                         <RiHome2Line></RiHome2Line>
//                         <h1>Home</h1>
//                     </div>
//                 </NavLink>
//                 <NavLink to={'/timeline'} className={({ isActive }) =>
//                     `font-semibold mr-2 ${isActive ? "bg-green-900 text-white rounded-xl" : ""}`
//                 }>
//                     <div className='flex justify-center items-center gap-2  px-5 py-2'>
//                         <RiTimeLine></RiTimeLine>
//                         <h1>Timeline</h1>
//                     </div>
//                 </NavLink>
//                 <NavLink to={'/stats'} className={({ isActive }) =>
//                     `font-semibold mr-2 ${isActive ? "bg-green-900 text-white rounded-xl" : ""}`
//                 }>
//                     <div className='flex justify-center items-center gap-2  px-5 py-2'>
//                         <ImStatsDots></ImStatsDots>
//                         <h1>Stats</h1>
//                     </div>
//                 </NavLink>
//             </div>
//             <div className="flex-none md:hidden">
//                 <button className="btn btn-square btn-ghost">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//                         <div className="flex flex-col">
//                             <NavLink to={'/'} className={({ isActive }) =>
//                                 `font-semibold mr-2 ${isActive ? "bg-green-900 text-white rounded-xl" : ""}`
//                             }>
//                                 <div className='flex justify-center items-center gap-2  px-5 py-2'>
//                                     <RiHome2Line></RiHome2Line>
//                                     <h1>Home</h1>
//                                 </div>
//                             </NavLink>
//                             <NavLink to={'/timeline'} className={({ isActive }) =>
//                                 `font-semibold mr-2 ${isActive ? "bg-green-900 text-white rounded-xl" : ""}`
//                             }>
//                                 <div className='flex justify-center items-center gap-2  px-5 py-2'>
//                                     <RiTimeLine></RiTimeLine>
//                                     <h1>Timeline</h1>
//                                 </div>
//                             </NavLink>
//                             <NavLink to={'/stats'} className={({ isActive }) =>
//                                 `font-semibold mr-2 ${isActive ? "bg-green-900 text-white rounded-xl" : ""}`
//                             }>
//                                 <div className='flex justify-center items-center gap-2  px-5 py-2'>
//                                     <ImStatsDots></ImStatsDots>
//                                     <h1>Stats</h1>
//                                 </div>
//                             </NavLink>
//                         </div>
//                     </svg>
//                 </button>
//             </div>
//         </div>


//     );
// };

// export default Navbar;



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
        <div className="flex justify-between items-center container mx-auto py-5">
            <div>
                <img src={logo} alt="KeenKeeper" />
            </div>
            <div className="hidden md:flex">

                <NavLink to={'/'} className={({ isActive }) =>
                    `font-semibold mr-2 ${isActive ? "bg-green-900 text-white rounded-xl" : ""}`
                }>
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

                        <NavLink to={'/'} onClick={() => setOpen(false)} className={({ isActive }) =>
                            `font-semibold ${isActive ? "bg-green-900 text-white rounded-xl" : ""}`
                        }>
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
    );
};

export default Navbar;


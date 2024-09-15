import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";

import logo from '../assets/helloSheLogo.jpg'
import CommonButton from '../Components/Btn/CommonButton'


const Header = () => {

    const [showMeu, setShowMeu] = useState(false);
    const changeOption = () => {
        setShowMeu(!showMeu)
        console.log("is working");
    }
    return (
        <div className='max-w-full bg-slate-800'>
            <header className='container mx-auto flex justify-between items-center bg-slate-800 text-white rounded-xl shadow-slate-500'>
                <div >
                    <a href="/">
                        <img width={80} className='rounded-full ring-2 ring-purple-500' src={logo} alt="ashiful islam" />
                    </a>
                </div>

                {

                    <span onClick={changeOption} className='mr-4 '>
                        {
                            showMeu ? < GiCrossMark className='md:hidden text-2xl' /> : <FaBars className='md:hidden text-2xl' />
                        }
                    </span>
                }

                <nav className={`${showMeu ? 'flex  absolute top-20 w-screen flex-col list-none overflow-hidden gap-1 items-center py-4 bg-blue-900' : 'hidden'} md:flex md:items-center md:w-auto list-none `} >


                    <>

                        <li className='sm:m-2 cursor-pointer hover:bg-slate-900 p-4 rounded w-full'><a href="#">Home</a></li>
                        <li className='sm:m-2 cursor-pointer hover:bg-slate-900 p-4 rounded w-full'><a href="#">About</a></li>
                        <li className='sm:m-2 cursor-pointer hover:bg-slate-900 p-4 rounded w-full'><a href="#">Service</a></li>
                        <li className='sm:m-2 cursor-pointer hover:bg-slate-900 p-4 rounded w-full'><a href="#">Skills</a></li>
                        <li className='sm:m-2 cursor-pointer  p-4 rounded w-full'><a href="#">
                            < CommonButton btnText="Contact" />
                        </a></li>

                    </>

                </nav>

            </header>
        </div>
    )
}

export default Header

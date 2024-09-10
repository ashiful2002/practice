import React from 'react'
import { HERO_CONTENT } from '../constants/index'
import profilePic from '../assets/kevinRushProfile.png'

import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1  className='p-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Welcome to <span className='bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent font-semibold tracking-tight '>Hello SHE</span>
                        </h1>
                        <p
                            className='bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent text-3xl tracking-tight '>A Non Profitable Organization</p>
                        <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className='flex justify-center'>
                        <img src={profilePic} alt="Profile image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

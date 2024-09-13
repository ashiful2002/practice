import React from 'react'
import { HERO_CONTENT } from '../constants/index'
import HeroImage from '../assets/HeroImage.jpg'


const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35 mt-4 h-[80vh] m-auto'>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1  className='p-16 text-3xl font-thin tracking-tight text-left lg:mt-16 lg:text-4xl block'>Welcome to <span className='bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-5xl lg:text-8xl text-transparent font-semibold tracking-tighter font-serif block'>Hello SHE</span>
                        </h1>
                        <p
                            className='gradient-heading'>A Non Profitable Organization</p>
                        <p className='my-2 max-w-xl py-6 text-xl tracking-tighter '>{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className='flex justify-center'>
                        <img className='rounded-3xl' src={HeroImage} alt="Profile image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

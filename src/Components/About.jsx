import aboutImage from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className="my-20 text-center text-4xl">
           About us
            <span className='text-neutral-500 '></span>
            </h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8 ">
                    <img src={aboutImage} className='rounded-2xl' alt="About Image" />
                </div>
                <div className='w-full lg:w-1/2 flex justify-start'>
                    <div className="flex justify-center ">
                        <p className='my-2 max-w-xl py-6 flex '>{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

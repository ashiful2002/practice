import aboutImage from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { Divider } from 'antd';

const About = () => {
    return (
        <div className=' pb-4'>
            <h1 className="section-heading gradient-heading">
                About us

                <span className='text-neutral-500 '></span>
            </h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8 ">
                    <img src={aboutImage} className='rounded-2xl' alt="About Image" />
                </div>
                <div className='w-full lg:w-1/2 flex justify-start'>
                    <div className="flex justify-center ">
                        <p className='section-para'>{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>

            <Divider
                className='bg-neutral-900'
                variant="dotted"

            ></Divider>
            

        </div>
    )
}

export default About

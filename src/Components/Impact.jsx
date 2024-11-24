import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Divider } from 'antd';
import { IMPACT } from '../constants/index'
import { div } from 'framer-motion/client';
import { ImParagraphCenter } from 'react-icons/im';
const About = () => {
  return (
    <div className=' pb-4'>
      <h1 className="section-heading gradient-heading">
        Impact

        <span className='text-neutral-500 '></span>
      </h1>

      {/* card starts here */}
      {
        IMPACT.map((impact) => {
          return (
            <div key={impact.id}
              className='text-center border border-xl flex items-center justify-center mb-4 shadow-md'
            >
              <div className='text-cenetr'>
                <h1 className='section-heading gradient-heading'>{impact.icon}</h1>
                <h2>{impact.title}</h2>
                <p>{impact.desc}</p>
              </div>

            </div>
          )
        })
      }


      {/* card ends here */}

      {/* <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8 ">
                    <img src={aboutImage} className='rounded-2xl' alt="About Image" />
                </div>
                <div className='w-full lg:w-1/2 flex justify-start'>
                    <div className="flex justify-center ">
                        <p className='section-para'>{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div> */}

      <Divider
        className='bg-neutral-900'
        variant="dotted"

      ></Divider>


    </div>
  )
}

export default About

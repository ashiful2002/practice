import React from 'react'
import { EXPERIENCES } from '../constants'
const Experiences = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl'>Experiances</h1>
            <div>
                {EXPERIENCES.map((experiance, index) => {
                    console.log(experiance);

                  return  <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                            <p className='mb-2 etxt-sm text-neutral-400 '>{experiance.year}</p>
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>
                                {experiance.role} - {" "}
                                <span className='text-sm text-purple-100'>{experiance.company}</span>
                            </h6>
                            <p className='mb-4 text-neutral-400'>
                                {experiance.description}

                            </p>
                            {experiance.technologies.map((tech, index) => {
                               return <span key={index}
                                    className='mr-2 mt-4
                                 rounded bg-neutral-900
                                  px-2 py-1 text-sm 
                                  font-medium
                                   text-purple-800'>
                                    {tech}
                                </span>
                            })}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Experiences

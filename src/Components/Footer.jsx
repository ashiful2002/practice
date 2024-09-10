import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col gap-3 lg:flex-row lg:justify-between '>
            <div>
                <p>Copyright © 2020 | all rights reserved by Hello She </p>
            </div>
            <div className='text-center'>
                <p>Developoed by <a href="https://m.me/ashifulislam.mukto" target='_blank'> <span className='underline'>Mukto</span> </a></p>
            </div>
        </div>

    )
}

export default Footer

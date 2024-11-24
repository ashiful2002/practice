import React from 'react'

const Footer = () => {
    const fullYear = new Date().getFullYear()
    return (
        <div className='flex flex-col gap-3 lg:flex-row lg:justify-between text-center'>
            <div>
                <p>Copyright © {fullYear} | All rights reserved by <span className='primary_color'>Hello She</span> </p>
            </div>
            <div className='text-center text-sm '>
                <p>Developoed by <a href="https://m.me/ashifulislam.mukto" target='_blank'> <span className='underline text-blue-300'>Mukto</span> </a></p>
            </div>
        </div>

    )
}

export default Footer

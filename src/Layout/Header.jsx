import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className='flex items-center justify-between bg-green-500 text-white p-2 sticky'>
                <div>
                    <h1>Logo-Here</h1>
                </div>
                <div>
                    <ul className='flex justify-center items-center gap-7'>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header

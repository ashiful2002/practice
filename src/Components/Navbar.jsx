import HelloSheLogo from '../assets/helloSheLogo.jpg'

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Navbar = () => {
    return (
        <>
            <nav className=' flex justify-between items-center mb-20 mr-0'>
                <div className='flex items-center flex-shrink-0'>
                    <a href="/">
                    <img src={HelloSheLogo}  className='mx-2 w-20 rounded-full' alt="logo" />
                    </a>    
                </div>
                <ul className='m-8 flex items-center justify-center gap-4 text-2xl'>
                    <li><a href="https://www.facebook.com/profile.php?id=61565501011722&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> <FaInstagramSquare /></a></li>
                    <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"> <FaYoutube /></a></li>
                    <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"> <FaLinkedin /></a></li>

                </ul>



            </nav>
        </>
    )
}

export default Navbar

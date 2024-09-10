import { CONTACT } from "../constants"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";



const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h1 className='my-10 text-center text-4xl'>Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4 "> <FaLocationDot />{ CONTACT.address}</p>
        <p className="my-4"> < FaPhone />{CONTACT.phoneNo}</p>
      
        <a href="mailto:ahantor602@gmail.com" target="_blank" className="border-b"> < FaEnvelope />{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact

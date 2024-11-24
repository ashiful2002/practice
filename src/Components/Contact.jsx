import { CONTACT } from "../constants"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className="section-heading gradient-heading">
        Contact Us
        <span className='text-neutral-500 '></span>
      </h1>
      <div className="flex items-center justify-center flex-wrap">
        <div className="hidden w-full lg:w-1/2  justify-center  bg-amber-300 rounded-lg lg:p-8">


          {/* here will be added a form message */}

        </div>
        <div className='w-full lg:w-1/2 mt-10 text-center tracking-tighter'>

          <div className="all-centered gap-2" > <FaLocationDot /><p className="my-4 "> {CONTACT.address}</p></div>
          <div className="all-centered gap-2" > < FaPhone /> <p className="my-4"> {CONTACT.phoneNo}</p></div>
          <div className="all-centered gap-2" > < FaEnvelope />  <a href="mailto:ahantor602@gmail.com" target="_blank" className="border-b"> {CONTACT.email}</a></div>

        </div>
      </div>
    </div>
  )
}

export default Contact

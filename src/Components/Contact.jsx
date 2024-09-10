import { CONTACT } from "../constants"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className="my-20 text-center text-4xl">
        Contact Us
        <span className='text-neutral-500 '></span>
      </h1>
      <div className="flex items-center justify-center flex-wrap">
        <div className="w-full lg:w-1/2 flex justify-center lg:p-8">


        

          <iframe className="rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d144977.39815190804!2d90.33728815181978!3d23.780975728157546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2z4Kai4Ka-4KaV4Ka-!5e1!3m2!1sbn!2sbd!4v1725979124387!5m2!1sbn!2sbd" width="450" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

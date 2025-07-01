import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import SingleInfo from './SingleInfo';


const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text="OjatabuPaschal@gmail.com" Image={HiOutlineMail}/>
        <SingleInfo text="+1 7743128861" Image={FiPhone}/>
        <SingleInfo text="Worcester, Ma" Image={IoLocationOutline}/>

    </div>
  )
}

export default ContactInfo
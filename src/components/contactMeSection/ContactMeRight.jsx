import React from 'react'
import ContactSocial from './ContactSocial'
import COntactInfo from './COntactInfo'

const ContactMeRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
        <img src="../public/images/email-image.png" alt="Contact Me" className='max-w-[300px]'/>
        <COntactInfo />
        <ContactSocial />

    </div>
    
  )
}

export default ContactMeRight
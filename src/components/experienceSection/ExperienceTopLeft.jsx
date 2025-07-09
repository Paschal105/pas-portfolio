import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Since 2022</p>
        <div className='flex justify-center items-center gap-4 '>
            <ExperienceInfo number='1+' text="Years"/>
            <p className='font-bold text-6xl text-lightBrown'>-</p>
            <ExperienceInfo number='10+' text="Projects"/>
        </div>
        <p className='text-center text-white'></p>
        <ExperienceInfo  number='100+' text="Users" />
    </div>
  )
}

export default ExperienceTopLeft
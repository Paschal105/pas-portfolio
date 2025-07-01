import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { FaLinux } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import{ motion } from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants';

const skills = [
  {
    skill:'HTML',
    icon: FaHtml5,
  },
  {
    skill:'CSS',
    icon:FaCss3Alt,
  },
  {
    skill:'JavaScript',
    icon:IoLogoJavascript,
  },
  {
    skill:"ReactJS",
    icon: FaReact,
  },
  {
    skill:"Python",
    icon: FaPython,

  },
  {
    skill:"Linux",
    icon: FaLinux  ,
  },
  {
    skill:"FastAPI",
    icon:  SiFastapi,
  },
  {
    skill:"AWS",
    icon: FaAws,
  },
]; 

const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
        {skills.map((item,index)=>{

            return (
                <motion.div 
                  variants={fadeIn('up', 0.2)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{once: false, amount:0.7}}
                    
                  key={index} className="flex flex-col items-center">
                <item.icon className='text-7xl text-orange'/>
                <p className='mt-4 text-white items-center'>{item.skill}</p>     
                </motion.div>
            );
            
        })}
    </div>
  )
}

export default AllSkillsSM
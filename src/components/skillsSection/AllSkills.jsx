import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { FaLinux } from "react-icons/fa6";
import SingleSkill from './SingleSkill';
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

const AllSkills = () => {
  return (
    <div>
      <div className='flex items-start justify-center relative gap-2 max-w-[1200px] mx-auto'>
        {skills.map((item,index)=>{
          return(
            <motion.div 
              variants={fadeIn('up', `0.${index}`)}
              initial='hidden'
              whileInView='show'
              viewport={{once: false, amount:0}}                 
            >
              <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>}/>
            </motion.div> 
          );
        })}

      </div>

    </div>
  )
};

export default AllSkills
import React from 'react'
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { SiFastapi } from "react-icons/si";
import { FaLinux } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import{ motion } from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants';

const skills = [
  {
    skill:'Docker',
    icon: FaDocker,
  },
  {
    skill:'Nodejs',
    icon:FaNodeJs,
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
    skill:"PostgreSQL",
    icon: DiPostgresql,
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
import React from 'react'
import { FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";

import SingleSkill from './SingleSkill';
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
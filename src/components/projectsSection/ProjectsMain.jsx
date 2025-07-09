import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
// eslint-disable-next-line no-unused-vars
import{ motion } from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants';

const projects = [
    {
        name:"Code Buddy",
        year:"Feb 2025",
        align:"right",
        image:"/images/website-img-1.jpg",
        link:"https://github.com/Paschal105/Code_Buddy", 
    },
    {
        name:"Plannar",
        year:"Jan 2025",
        align:"left",
        image:"/images/website-img-2.webp",
        link:"https://paschal105.github.io/Student_Plannar/", 
    },
    {
        name:"Planet simulation",
        year:"Mar 2024",
        align:"right",
        image:"/images/website-img-3.jpg",
        link:"https://github.com/Paschal105/Planet-simulation-", 
    },
    {
        name:"Scrabble Game",
        year:"May 2023",
        align:"left",
        image:"/images/website-img-4.jpg",
        link:"https://paschal105.github.io/Scrabble_game/landingPage.html", 
    },
];

const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
        <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{once: false, amount:0}}
        >
            <ProjectsText/>
        </motion.div>
        
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {projects.map((item, index)=>{
                return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link}/>
            })}
        </div>
    </div>
  )
}

export default ProjectsMain
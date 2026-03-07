import React from 'react'
import SingleExperience from './SingleExperience '
import { FaArrowRight } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import{ motion } from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants';

const experiences = [
    {
        job:"Technical Specialist",
        company: "Apple",
        date: "August 2025 - Present ",
        responsibilities:[
            "Diagnose and resolve complex technical issues for 30+ customers daily",
            "Communicate technical concepts effectively to non-technical users", 
            "CCollaborate with cross-functional teams in fast-paced retail environment",
        ]
    },
    {
        job: "Software Engineering",
        company: "Intern Hack",
        date: "Jun 2021 - Aug 2021",
        responsibilities:[
            "Improved UI usability by 30% through user testing and iterative feedback",
            "Developed responsive web application frontend using JavaScript, HTML, and CSS",
            "Collaborated in Agile team environment with weekly sprints and code reviews",
        ]
    },
    {
        job:"Freelance Software Engineer",
        company: "Self-Employed",
        date: "August 2024 - Present",
        responsibilities:[
            "Developed AI-powered tools integrating Claude API for automated content analysis",
            "Built custom web applications for small business clients using React and Next.js",
            "Implemented responsive, mobile-first designs with Tailwind CSS",
            "Delivered production-ready solutions deployed on Vercel with CI/CD pipelines",
        ]
    },
]

const AllExperience = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between'>
        {experiences.map((experience, index)=>{
            return(
                <>
                    <SingleExperience  key={index} experience={experience}/>
                    {index < 2 ? (
                        <motion.div
                            variants={fadeIn('right', 0.2)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{once: false, amount:0.7}} 
                        >
                            <FaArrowRight className='text-6xl text-orange lg:block sm:hidden'/>
                        </motion.div>
                    ) : ( "" )}
                </>
            );
        })}
    </div>
  )
}

export default AllExperience
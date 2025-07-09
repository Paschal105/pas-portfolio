import React from 'react'
import SingleExperience from './SingleExperience '
import { FaArrowRight } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import{ motion } from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants';

const experiences = [
    {
        job:" Front-End Engineering",
        company: "Waoome",
        date: "Jun 2024 - Present",
        responsibilities:[
            "Built responsive, user-friendly interfaces with React and JavaScript, improving accessibility for 5000+ users.",
            "Developed & maintained internal APIs, ensuring efficient data retrieval and seamless frontend/backend integration.", 
            "Collaborated in Agile sprints using Git and CI/CD pipelines to deliver performance-optimized features, reducing page load times by 25%.",
        ]
    },
    {
        job: "Software Engineering",
        company: "Intern Hack",
        date: "Jun 2021 - Aug 2021",
        responsibilities:[
            "Worked in a team of 5 to develop a web app to improve money management during COVID-19",
            "Built the web app's front end with JavaScript, HTML, and CSS, improving UI usability by 30% through user testing and feedback.",
            "Using Agile methodology, each team member had a clear understanding of the project goals, improved code quality through weekly sprints, and adapted to changes effectively, preventing any major setbacks.",
        ]
    },
    {
        job:"Sales Representative",
        company: "Trinity Solar",
        date: "Dec 2024 - Jan 2025",
        responsibilities:[
            "Worked in a team of 5 to develop a web app to improve money management during COVID-19",
            "Built the web app's front end with JavaScript, HTML, and CSS, improving UI usability by 30% through user testing and feedback.",
            "Provide support for student through thier learning journey",
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
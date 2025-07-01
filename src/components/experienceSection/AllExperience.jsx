import React from 'react'
import SingleExperience from './SingleExperience '
import { FaArrowRight } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import{ motion } from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants';

const experiences = [
    {
        job:" Software Engineering",
        company: "Alex Apps",
        date: "2022 - Present",
        responsibilities:[
            "Worked in a team of 5 to develop a web app to improve money management during COVID-19",
            "Built the web app's front end with JavaScript, HTML, and CSS, improving UI usability by 30% through user testing and feedback.",
            "Provide support for student through thier learning journey",
        ]
    },
    {
        job:" front End Developer",
        company: "Alex Apps",
        date: "2022 - Present",
        responsibilities:[
            "Worked in a team of 5 to develop a web app to improve money management during COVID-19",
            "Built the web app's front end with JavaScript, HTML, and CSS, improving UI usability by 30% through user testing and feedback.",
            "Provide support for student through thier learning journey",
        ]
    },
    {
        job:" Full stack software engineer",
        company: "Apple",
        date: "2025 - Present",
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
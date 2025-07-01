import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'> About Me</h2>
        <p className='text-white'> 
            As a software engineer, I’m always looking for ways to push my limits, take on new challenges, and use technology to solve real-world problems. I thrive on learning, 
            whether it’s expanding my expertise in full-stack development, 
            building something from scratch or diving deeper into AI.
            I have experience designing, building, and maintaining efficient, reusable, and reliable code across the full software stack. 
        </p>
        <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My Projects</button>
    </div>
  );
};

export default AboutMeText
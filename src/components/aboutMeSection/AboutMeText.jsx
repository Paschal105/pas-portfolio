import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'> About Me</h2>
        <p className='text-white'> 
          I'm a software engineer with a passion for building full-stack and AI-powered solutions that solve real problems at scale. 
          I learn fast, take ownership, and love turning ideas into polished, high-impact products, especially in fast-moving, mission-driven teams.
          Outside of tech, I play semi-pro soccer and create media content, where I film programs, and help share meaningful stories through video.
        </p>
        <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My Projects</button>
    </div>
  );
};

export default AboutMeText
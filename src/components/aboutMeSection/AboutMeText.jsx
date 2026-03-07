import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'> About Me</h2>
        <p className='text-white'> 
          I'm a software developer building full-stack web applications with React, Next.js, Ai integration etc.
          I'm currently developing <span className='font-bold text-white'>Pulse</span>, an event discovery 
          platform that helps users find local events through map-based filtering and trip planning. 
          I'm architecting the database (PostgreSQL), building the frontend 
          (next.js/Tailwind), and integrating APIs (Google Maps, Eventbrite) and deploying to production with CI/CD pipelines.
        </p >

        <p className='text-white'>
          I also build <span className='font-bold text-white'>AI-powered tools</span> for small business 
          clients using Claude API—chat assistants, content generators, and email drafters that save 
          hours of manual work. I love the challenge of taking a business problem and turning it into 
          a polished, working solution.
        </p>

        <p className='text-white'>
          I graduated from UMass Lowell in 2024 with a CS degree and have been building ever since. 
          I learn fast, take full ownership of projects, and ship with production quality in mind. 
          Now I'm looking for a <span className='font-bold text-white'>full-time software engineering 
          role</span> where I can bring this entrepreneurial mindset to a team solving meaningful problems.
          Outside of tech, I play semi-pro soccer and create media content. Both taught me the importance 
          of collaboration, attention to detail, and iterating toward excellence.
        </p>

        <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My Projects</button>
    </div>
  );
};

export default AboutMeText


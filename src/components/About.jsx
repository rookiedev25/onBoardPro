import React from 'react'
import profPic from '../assets/img/rookiedev25.JPG'; // Adjust the path based on your file structure

const About = () => {
return (
  <>
    {/* <div className="container flex items-center justify-center py-8 sm:px-8 sm:py-10 w-full absolute bg-gray-100">
     */}
    <div className="flex items-center justify-center py-8 sm:px-8 sm:py-10 w-full absolute bg-gray-100 mt-10 h-full">
      <div className="w-2/3 max-w-450 bg-white shadow-lg rounded-lg p-6 sm:p-10 flex flex-row gap-4 justify-between">
        <div className="containerLeft w-150">
          <h1 className="font-extrabold text-6xl sm:text-4xl mb-7">About Me</h1>
          <p className="para1 font-regular text-base sm:text-xl mb-4">
            I’m Gouranga Bhattacherjee, a passionate software developer who
            loves creating interactive and user-friendly web applications.
            Recently, I’ve taken a big leap in my journey by learning React.js
            and building my first platform from scratch. As a beginner React
            developer, I’m excited about the endless possibilities this library
            brings and how it allows me to turn ideas into dynamic experiences.
          </p>
          <p className="para2 font-regular text-base sm:text-xl mb-4">
            I’ve always believed coding is as much an art as it is logic. With
            my background in film-making and video editing, I approach front-end
            development with a creative lens — focusing on clean design, smooth
            UI, and intuitive user experiences.
          </p>
          <p className="para3 font-regular text-base sm:text-xl mb-4">
            The transition to React marks a turning point in my
            career, where I aim to create modern web apps with real-world
            functionality. I regularly push updates to GitHub, experiment with
            APIs, and build responsive, mobile-friendly layouts.
          </p>
          <p className="para4 font-regular text-base sm:text-xl mb-4">
            Looking ahead, I aspire to become a Full-Stack developer by
            combining my growing React skills with Node.js, Express, and
            MongoDB. My goal is to contribute to meaningful projects,
            collaborate with innovative teams, and craft software solutions that
            leave an impact while continuing to grow as a developer.
          </p>
        </div>
        <div className="containerRight flex items-center justify-center z-10">
          <img
            className="rounded-full h-120 w-120 object-cover mt-4"
            src={profPic}
            alt="About me"
          />
        </div>
      </div>
    </div>
  </>
);
}

export default About
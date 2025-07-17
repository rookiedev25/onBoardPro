import React from 'react'


const About = () => {
return (
  <>
    {/* <div className="container flex items-center justify-center py-8 sm:px-8 sm:py-10 w-full absolute bg-gray-100">
     */}
    <div className="flex items-center justify-center py-8 sm:px-8 sm:py-10 w-full absolute bg-gray-100 mt-10 h-full">
      <div className="w-2/3 max-w-450 bg-white shadow-lg rounded-lg p-6 sm:p-10 flex flex-row gap-4 justify-between">
        <div className="containerLeft w-150">
          <h1 className="font-extrabold text-6xl sm:text-4xl mb-2">
            About the Team
          </h1>
          <p className="para1 font-regular text-base sm:text-xl mb-4">
            We're not just a technical writing team—we're a revolution in
            digital storytelling. If you can transform complex code into poetry,
            turn technical manuals into page-turners, and see documentation as
            an art form, this is your battlefield. We're building more than
            documents; we're crafting user experiences that make technology
            human.
          </p>
          <p className="para2 font-regular text-base sm:text-xl mb-4">
            No boring reports, no dry instructions—just pure, electric
            communication that sparks understanding. Think you can decode the
            impossible? Think you can make technology sing?
          </p>
          <p className="para3 font-regular text-base sm:text-xl mb-4">
            Join us, and let's rewrite the rules of technical writing together.
                    </p>
            <p className="para4 font-regular text-base sm:text-xl mb-4">
                        If you're ready to challenge the status quo, to innovate, and to
            create documentation that doesn't just inform but inspires, then
            welcome to the team. We're not just writing; we're changing the
                        narrative of technology.    
            </p>
          <p className="para5 font-regular text-base sm:text-xl mb-4">
                        If you can turn the mundane into the extraordinary, if you can make
            the complex simple, and if you can see the beauty in every line of
            code, then you're not just a technical writer—you are a digital
            storyteller. Join us, and let's create a legacy of innovation and
            excellence in technical writing.
          </p>
        </div>
        <div className="containerRight flex items-center justify-center">
          <img
            className="rounded-full h-120 w-120 object-cover mt-4"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  </>
);
}

export default About
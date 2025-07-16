import React from 'react'


const About = () => {
return (
    <>
        <div className="container fixed inset-0 flex items-center justify-center px-4 py-8 sm:px-8 sm:py-10 w-screen h-screen bg-gray-100">
            <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6 sm:p-10">
                <h1 className="font-extrabold text-2xl sm:text-3xl mb-2">About the Team</h1>
                <p className="para1 font-regular text-base sm:text-lg mb-4">
                    We're not just a technical writing team—we're a revolution in digital
                    storytelling. If you can transform complex code into poetry, turn
                    technical manuals into page-turners, and see documentation as an art
                    form, this is your battlefield. We're building more than documents;
                    we're crafting user experiences that make technology human.
                </p>
                <p className="para2 font-regular text-base sm:text-lg mb-4">
                    No boring reports, no dry instructions—just pure, electric
                    communication that sparks understanding. Think you can decode the
                    impossible? Think you can make technology sing?
                </p>
                <p className="para3 font-regular text-base sm:text-lg mb-4">
                    Join us, and let's rewrite the rules of technical writing together.
                </p>
            </div>
        </div>
    </>
);
}

export default About
import React from 'react'

const About = () => {
return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <div className="max-w-2xl text-center">
            <p className="mb-2">
                Welcome to our dashboard platform. We are dedicated to providing powerful analytics 
                and insights to help businesses make data-driven decisions.
            </p>
            <p className="mb-2">
                Our team of experts works tirelessly to ensure you have the best experience 
                with our cutting-edge dashboard solutions.
            </p>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                <p>
                    To empower organizations with intuitive and powerful data visualization tools 
                    that drive success and growth.
                </p>
            </div>
        </div>
    </div>
);
}

export default About
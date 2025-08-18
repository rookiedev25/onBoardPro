import React from 'react'
import CardsGrid from '../../CardsGrid';

const SetOne = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-10 min-h-screen bg-gray-100 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100">
        {/* <h1 className="text-4xl text-left font-medium mt-12 mb-2 max-w-5xl">Welcome to {}</h1> */}
        <div className="moduleInfo max-w-5xl flex flex-col gap-2 mb-5 mt-12">
          <h2 className="text-2xl font-normal border-b-1 border-gray-300 py-2">
            About this Module
          </h2>
          <p className="text-lg font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            sint ipsam eligendi cumque quae, quod ducimus nulla enim, ea
            architecto voluptate minima harum, adipisci aut recusandae a
            temporibus quas! Perferendis expedita quam quaerat natus, vitae
            asperiores, delectus ex commodi, distinctio magnam accusantium. Eius
            error dicta doloribus sunt, nostrum officia eum!
          </p>
          <h2 className="text-2xl font-normal">What you learn?</h2>
          <p className="text-lg font-thin">
            Start exploring the topics below to build your skills and become
            proficient in using ST4 for technical documentation.
          </p>
        </div>
        <div className="moduleCardContainer ">
          <CardsGrid type="trainingModules_SET1" variant="module" gridCols={1} />
        </div>
      </div>
    </>
  );
};

export default SetOne;
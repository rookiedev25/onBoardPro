import React from 'react'
import { Link } from 'react-router-dom';
import CardsGrid from './CardsGrid';

const Training = () => {

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Technical Documentation Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />
      <div className="flex flex-col items-center justify-center py-16 sm:py-20 px-4 sm:px-6 min-h-screen bg-gray-100 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100">
        <div className="w-full mt-16 sm:mt-0">
          <CardsGrid type="training" variant="training" gridCols={2} />
        </div>
      </div>
    </>
  );
}

export default Training
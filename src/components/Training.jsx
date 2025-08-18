import React from 'react'
import { Link } from 'react-router-dom';
import CardsGrid from './CardsGrid';

const Training = () => {

  return (
    <>
      <div className="flex flex-col items-center justify-center py-16 sm:py-20 px-4 sm:px-6 min-h-screen bg-gray-100 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100">
        <div className="w-full mt-16 sm:mt-0">
          <CardsGrid type="training" variant="training" gridCols={2} />
        </div>
      </div>
    </>
  );
}

export default Training
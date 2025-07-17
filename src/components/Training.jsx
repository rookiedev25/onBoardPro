import React from 'react'
import { Link } from 'react-router-dom';
import CardsGrid from './CardsGrid';

const Training = () => {

  return (
    <>
      <div className="flex flex-col items-center justify-center py-20 min-h-screen bg-gray-100">
        <CardsGrid type="training" variant="training" gridCols={2} />
      </div>
    </>
  );
}

export default Training
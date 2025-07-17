import React from 'react'
import CardsGrid from './CardsGrid';

const TrainingEssentials = () => {
  
  return (
    <>
      <div className="flex flex-col items-left py-20 min-h-screen bg-gray-100">
        <div className="cards flex justify-center">
          <CardsGrid type="trainingEssentials" variant="threeByThreeCards" gridCols={3} />
        </div>
      </div>
    </>
  );
}

export default TrainingEssentials
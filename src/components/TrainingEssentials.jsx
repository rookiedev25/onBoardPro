import React from 'react'
import CardsGrid from './CardsGrid';

const TrainingEssentials = () => {
  
  return (
    <>
      <div className="flex flex-col items-left py-20 mt-10 min-h-screen bg-gray-100 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100">
        <div className="cards flex justify-center">
          <CardsGrid
            type="trainingEssentials"
            variant="threeByThreeCards"
            gridCols={3}
          />
        </div>
      </div>
    </>
  );
}

export default TrainingEssentials
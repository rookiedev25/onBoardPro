import React from 'react';
import { useParams } from 'react-router-dom';
import { useCards } from '../contexts/CardsContext';
import CardsGrid from './CardsGrid';

const TrainingModulesPage = () => {
  const { setNumber } = useParams();
  const { cardsData } = useCards();
  
  // Debug logging
//   console.log('TrainingModulesPage - setNumber:', setNumber);
//   console.log('TrainingModulesPage - cardsData keys:', Object.keys(cardsData));
  
  // Get the training modules data for the specific SET
  const moduleDataKey = `trainingModules_SET${setNumber}`;
  const moduleData = cardsData[moduleDataKey] || [];
  
//   console.log('TrainingModulesPage - moduleDataKey:', moduleDataKey);
//   console.log('TrainingModulesPage - moduleData length:', moduleData.length);
  
  // Get the SET information from trainingEssentials for dynamic content
  const setInfo = cardsData.trainingEssentials?.find(
    set => set.id === parseInt(setNumber)
  );

//   console.log('TrainingModulesPage - setInfo:', setInfo);

  // Fallback if no data found
  if (!moduleData.length && !setInfo) {
    return (
      <div className="flex flex-col justify-center items-center p-6 sm:p-10 min-h-screen bg-gray-100 px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 text-center">SET-{setNumber} Not Found</h1>
        <p className="text-base sm:text-lg mt-4 text-center">The requested training set does not exist.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center p-6 sm:p-10 min-h-screen bg-gray-100 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 px-4">
      {/* Dynamic header based on SET information */}
      <div className="moduleInfo max-w-6xl flex flex-col gap-2 mb-5 mt-16 sm:mt-12 w-full">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 text-center sm:text-left">
          {setInfo?.cardName || `SET-${setNumber}`}
        </h1>
        
        <h2 className="text-xl sm:text-2xl font-normal border-b-1 border-gray-300 py-2">
          About this Module
        </h2>
        <p className="text-base sm:text-lg font-thin leading-relaxed">
          {setInfo?.cardDescription || `Training modules for SET-${setNumber}`}
        </p>
        
        {/* <h2 className="text-2xl font-normal">What you'll learn</h2>
        <p className="text-lg font-thin">
          {setInfo?.moduleLearnings || `Key concepts and skills for SET-${setNumber}`}
        </p>
         */}
              
        {/* Module count */}
        {moduleData.length > 0 && (
          <p className="text-sm sm:text-md text-gray-600 mt-2">
            <strong>{moduleData.length}</strong> modules available in this set
          </p>
        )}
      </div>

      {/* Modules grid */}
      <div className="moduleCardContainer w-full">
        {moduleData.length > 0 ? (
          <CardsGrid 
            type={moduleDataKey} 
            variant="module" 
            gridCols={1} 
          />
        ) : (
          <div className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-md mx-4 sm:mx-0">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
              Modules Coming Soon
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Training modules for SET-{setNumber} are currently being prepared.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingModulesPage;

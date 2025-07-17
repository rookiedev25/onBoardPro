import React from 'react'
import CardsGrid from './CardsGrid';

const GraphicTools = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-20 min-h-screen bg-gray-100">
        <CardsGrid type="graphicTools" variant="graphicTools" gridCols={2} />
      </div>
    </>
  );
}

export default GraphicTools
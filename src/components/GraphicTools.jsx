import React from 'react'
import CardsGrid from './CardsGrid';

const GraphicTools = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-20 min-h-screen bg-gray-100 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100">
        <img
          src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Technical Documentation Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />
        <CardsGrid type="graphicTools" variant="twoByTwoCards" gridCols={2} />
      </div>
    </>
  );
}

export default GraphicTools
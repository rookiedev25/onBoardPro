import React from "react";
import { Link } from "react-router-dom";
import CardsGrid from "./CardsGrid";

const Guidelines = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-20 min-h-screen bg-gray-100">
        <CardsGrid type="guidelines" variant="threeByThreeCards" gridCols={3} />
      </div>
    </>
  );
};

export default Guidelines;

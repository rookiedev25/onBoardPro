import React from "react";
import CardsGrid from "./CardsGrid";

const TicketManagement = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-20 min-h-screen bg-gray-100 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100">
        <CardsGrid
          type="ticketManagement"
          variant="twoByTwoCards"
          gridCols={2}
        />
      </div>
    </>
  );
};

export default TicketManagement;

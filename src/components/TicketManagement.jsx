import React from "react";
import CardsGrid from "./CardsGrid";

const TicketManagement = () => {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Technical Documentation Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />
      <div className="flex flex-col items-center justify-center py-20 min-h-screen bg-gray-100 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100">
        <CardsGrid
          type="ticketManagement"
          variant="twoByTwoCards"
          gridCols={3}
        />
      </div>
    </>
  );
};

export default TicketManagement;

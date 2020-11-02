import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 max-w-md mx-auto">
      {children}
    </div>
  );
};

export default Card;

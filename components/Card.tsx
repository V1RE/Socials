import React from "react";

const Card = ({ children }) => {
  return (
    <div className="max-w-md p-6 mx-auto bg-white border border-gray-300 rounded-lg shadow-lg">
      {children}
    </div>
  );
};

export default Card;

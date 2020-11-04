import React from "react";

const Initials = ({ firstName, lastName }) => {
  const initials = `${firstName[0]}${lastName[0]}`;
  return (
    <svg height="64" width="64" viewBox="0 0 64 64">
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
        {initials}
      </text>
    </svg>
  );
};

export default Initials;

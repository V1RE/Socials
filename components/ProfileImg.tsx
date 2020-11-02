import React from "react";
import Image from "next/image";

const ProfileImg = ({ src = "", name = "" }) => {
  return (
    <div className={`${!src ? "animate-pulse" : ""}`}>
      <div className="rounded-full bg-gray-400 h-32 w-32 overflow-hidden">
        {src && <Image src={src} width="200" height="200" alt={name} />}
      </div>
    </div>
  );
};

export default ProfileImg;

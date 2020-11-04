import React from "react";
import Image from "next/image";
import Initials from "./Initials";

const ProfileImg = ({ user }) => {
  const fullName = `${user?.firstName} ${user?.lastName}`;
  return (
    <div>
      <div className="w-32 h-32 overflow-hidden bg-gray-400 rounded-full">
        {user?.image ? (
          <Image src={user?.image} width="200" height="200" alt={fullName} />
        ) : (
          <Initials firstName={user?.firstName} lastName={user?.lastName} />
        )}
      </div>
    </div>
  );
};

export default ProfileImg;

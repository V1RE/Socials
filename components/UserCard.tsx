import React from "react";
import Card from "./Card";
import ProfileImg from "./ProfileImg";

const UserCard = ({ user }) => {
  const fullName = `${user?.firstName} ${user?.lastName}`;
  return (
    <Card>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col flex-wrap items-center text-center sm:space-x-4 space-y-4 sm:space-y-0 sm:flex-row sm:text-left">
          <ProfileImg user={user} />
          <div className="flex-1">
            <h1 className="text-2xl">{fullName}</h1>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UserCard;

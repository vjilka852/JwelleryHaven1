import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const UserPanel = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Welcome to your dashboard, {user?.name}</h2>
    </div>
  );
};

export default UserPanel;

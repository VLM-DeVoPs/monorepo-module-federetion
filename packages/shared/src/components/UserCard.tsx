import React from "react";

export const UserCard = ({ username }: { username?: string }) => {
  return (
    <div style={{ border: "3px solid green", padding: 20 }}>
      <h1>UserName: {username ?? "user"}</h1>
      <div>
        <h1>password: 12345</h1>
      </div>
    </div>
  );
};

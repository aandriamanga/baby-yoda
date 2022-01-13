import React from "react";

import UserItem from "./UserItem";

const UserList = ({ users }) => (
  <>
    {users.map((user) => (
      <UserItem key={user.id} user={user} />
    ))}
  </>
);

export default UserList;

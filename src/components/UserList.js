import React from "react";

// import UserItem from "./UserItem";
import { AvatarList } from "@aantonio/yoda";

const UserList = ({ users }) => (
  <>
    <AvatarList users={users} />
  </>
);

export default UserList;

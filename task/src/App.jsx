import React from "react";

import "./index.scss";

import users from "./users.jsx";
import UsersList from "./UsersList.jsx";

const App = () => {
  return <UsersList users={users} />;
};

export default App;

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getNames();
  }, []);
  const getNames = async () => {
    const res = await axios.get("/names");

    setUsers(res.data);
  };
  return (
    <div>
      <h2>User List:</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

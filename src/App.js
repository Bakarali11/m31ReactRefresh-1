import React, { useState, useEffect } from "react";
import "./App.css";
import { Login } from "./components/login";
import { signUpFetch, tokenCheck } from "./utils";

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    tokenCheck(localStorage.getItem("MyToken"), setUser);
  }, []);

  const signUpHandler = async (e) => {
    e.preventDefault();
    const returnValue = await signUpFetch(username, email, password);
    setUser(returnValue.user.username);
  };

  return (
    <div className="App">
      <h1>{user}</h1>
      {!user ? (
        <form onSubmit={signUpHandler}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h2>You are logged in</h2>
      )}
    </div>
  );
};

export default App;

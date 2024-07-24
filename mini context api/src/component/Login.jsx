import react, { useState, UseContext } from "react";
import UserContext from "../context/Usercontext";
function Login() {
  const [username, Setusername] = react.useState("");
  const [password, Setpassword] = react.useState("");
  const { Setuser } = UseContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault(); //  it is used  beaucause by default when we submit values goes  somewhere when we submit
    Setuser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => Setusername(e.target.value)}
        placeholder="username"
      />{" "}
      <input
        type="text"
        value={password}
        onChange={(e) => Setpassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}> Submit </button>
    </div>
  );
}

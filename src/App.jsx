import { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const register = async () => {
    const res = await axios.post(
      "https://backend-hypa.onrender.com/api/auth/register",
      {
        username,
        password,
      },
    );

    alert(res.data);
  };

  const login = async () => {
    const res = await axios.post(
      "https://backend-hypa.onrender.com/api/auth/login",
      {
        username,
        password,
      },
    );

    alert(res.data);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        margin: "100px auto",
        gap: "10px",
      }}
    >
      <h1>Auth App</h1>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={register}>Register</button>

      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;

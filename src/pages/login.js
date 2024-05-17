import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './login.css'

function Login() {
  const history = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

async function submit(e) {
    e.preventDefault();
    try {
    await axios
        .post("http://localhost:3001/", { email, password })
        .then((res) => {
        if (res.data === "exists") {
            history("/home");
        } else if (res.data === "notexists") {
            alert("User doesn't exists");
        }
        })
        .catch((e) => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="login">
      <h1>Login</h1>

      <form className="form">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          placeholder="Email"
          required
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          placeholder="Password"
          required
        />
        <button type="submit" onClick={submit} >Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup" className="link">Signup Here</Link></p>

    </div>
  );
}

export default Login;

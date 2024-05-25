
import React, { useState } from "react";
import { useNavigate,  } from "react-router-dom";
import './login.css'

function Login() {
  const history = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

async function submit(e) {

  try{
    if( email === 'abc@gmail.com' && password === 'abc123'){
      history("/home")
    }else{
      alert("Wrong email or password. Try again.")
    }

  }catch(e){
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


    </div>
  );
}

export default Login;

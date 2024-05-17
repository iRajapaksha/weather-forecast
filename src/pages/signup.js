import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signup.css'

function SignUp() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:3001/signup", { email, password });
            console.log("Response data: " + res.data);
            if (res.data === "exists") {
                console.log("User exists");
                alert("User already signedup. Please login") // Navigate to the home page if the user exists
            } else if (res.data === "notexists") {
                alert("User created successfully");
                setEmail(''); // Clear the email field
                setPassword(''); // Clear the password field
                history('/home'); // Navigate to the home page if the user exists

            }
        } catch (e) {
            alert("Wrong details.");
            console.log(e);
        }
    }

    return (
        <div className="signup">
            <h1>Sign up </h1>

            <form onSubmit={submit} className="form">
                <input 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                    placeholder="Email"
                    required
                />
                <input 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                    placeholder="Password"
                    required
                />
                <button type="submit" className="button">Sign Up</button>
            </form>
            <p>Already have an account? <Link to={'/'} className="link">Login Here</Link></p>
        </div>
    );
}

export default SignUp;

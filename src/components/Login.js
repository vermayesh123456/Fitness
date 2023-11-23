import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


async function loginUser(email, password) {
    try {
        const response = await axios.post("http://localhost:5000/trainers/", { email, password });
        return response.data;
    } catch (error) {
        console.error("Error logging in", error);
        throw new Error("Unable to log in. Please try again later.");
    }
}

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            const result = await loginUser(email, password);
            if (result === "exist") {
                navigate("/app/home", { state: { id: email } });
            } else if (result === "notexist") {
                alert("User has not signed up");
            }
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="card p-4" style={{boxShadow:"2px 2px 2px grey"}}>
                <h1 className="text-center mb-4">Login</h1>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-danger w-100">
                        Login
                    </button>
                </form>

                <div className="mt-3 text-center">
                    <p>OR</p>
                </div>

                <div className="text-center">
                    <Link to="/Signup" className="btn btn-outline-danger">
                        Create new Account
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;

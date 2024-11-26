// src/components/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "./password.json";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        const user = users.find(
            (u) => u.username === username && u.password === password
        );

        if (user) {
            navigate("/home");
        } else {
            alert("Invalid username or password.");
        }
    };

    return (
        <div className="bg-gray-800 min-h-screen flex items-center justify-center text-white">
            <div className="w-96 bg-gray-900 p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-red-500 text-center">
                <i className="fas fa-car-side mr-2"></i>Login</h1>
                <p className="text-gray-400 text-center mb-6">
                    Enter your credentials to access the car search system.
                </p>
                <div>
                <label className="block text-gray-400 mb-1" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full p-3 rounded-md text-black focus:outline-none border-2 border-red-500"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-3 rounded-md text-black focus:outline-none border-2 border-red-500"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mt-6">
                    <button
                        onClick={handleLogin}
                        className="w-full bg-red-500 p-3 rounded-lg text-white hover:bg-red-400 transition duration-300 shadow-lg"
                    >
                        Login
                    </button>

            </div>
                    
                </div>

               
        </div>
    );
};

export default Login;

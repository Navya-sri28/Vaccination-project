import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        const loginData = {
            email: email,
            password: password
        };

        try {

            const response = await axios.post(
                "http://localhost:5000/api/users/login",
                loginData
            );

            console.log(response.data);

            if (response.data.success === true) {

                // Save logged-in user's ID
                const userId = response.data.data.id;

                localStorage.setItem("userId", userId);

                console.log("Logged in User ID:", userId);

                // Login successful
                navigate("/user-dashboard");

            } else {

                // Login failed
                navigate("/user-login-error");

            }

        } catch (error) {

            console.log("Login error:", error);

            // API error
            navigate("/user-login-error");

        }
    };

    return (
        <div>

            <h1>User Login</h1>

            <label>Email:</label>

            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br />
            <br />

            <label>Password:</label>

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br />
            <br />

            <button onClick={handleLogin}>
                Login
            </button>

        </div>
    );
}

export default UserLogin;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

<h1>Registration form</h1>

function UserRegistration() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [pinCode, setPinCode] = useState("");

    const handleRegister = () => {

        const userData = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            pinCode: pinCode
        };

        axios
            .post("http://localhost:5000/api/users/register", userData)
            .then((response) => {

                console.log(response.data);

                if (response.data.success) {
                    alert(response.data.message);
                    navigate("/user-dashboard");
                } else {
                    navigate("/");
                }

            })
            .catch((error) => {

                console.log("Registration error:", error);
                navigate("/");

            });
    };

    return (
        <div>

            <h1>User Registration</h1>

            <label>Name:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br />
            <br />

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

            <label>Phone:</label>
            <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            <br />
            <br />

            <label>Pin Code:</label>
            <input
                type="text"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
            />

            <br />
            <br />

            <button onClick={handleRegister}>
                Register
            </button>

        </div>
    );
}

export default UserRegistration;

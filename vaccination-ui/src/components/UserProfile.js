import React, { useEffect, useState } from "react";
import axios from "axios";

function UserProfile() {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const userId = localStorage.getItem("userId");

        console.log("Logged in User ID:", userId);

        if (!userId) {
            console.log("User ID not found");
            return;
        }

        axios
            .get(`http://localhost:5000/api/users/${userId}`)
            .then((response) => {

                console.log("Profile Response:", response.data);

                if (response.data.success === true) {
                    setUser(response.data.data);
                }

            })
            .catch((error) => {

                console.log("Error fetching profile:", error);

            });

    }, []);

    return (
        <div>

            <h1>User Profile</h1>

            {user && (
                <div>

                    <p>
                        <strong>ID:</strong> {user.id}
                    </p>

                    <p>
                        <strong>Name:</strong> {user.name}
                    </p>

                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>

                    <p>
                        <strong>Phone:</strong> {user.phone}
                    </p>

                    <p>
                        <strong>Pin Code:</strong> {user.pinCode}
                    </p>

                </div>
            )}

        </div>
    );
}

export default UserProfile;

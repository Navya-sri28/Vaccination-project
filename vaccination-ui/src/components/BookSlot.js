import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BookSlot() {

    const { id } = useParams();

    const navigate = useNavigate();

    const userId = localStorage.getItem("userId");

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleBooking = () => {

        if (date === "" || time === "") {
            alert("Please select date and time");
            return;
        }

        console.log("User ID:", userId);
        console.log("Centre ID:", id);
        console.log("Date:", date);
        console.log("Time:", time);

        alert("Slot selected successfully!");

        navigate("/user-dashboard");
    };

    return (
        <div>

            <h1>Book Vaccination Slot</h1>

            <br />

            <p>
                <strong>User ID:</strong> {userId}
            </p>

            <p>
                <strong>Vaccination Centre ID:</strong> {id}
            </p>

            <br />

            <label>Select Date:</label>

            <br />

            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            <br />
            <br />

            <label>Select Time:</label>

            <br />

            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />

            <br />
            <br />

            <button onClick={handleBooking}>
                Confirm Booking
            </button>

            <br />
            <br />

            <button onClick={() => navigate("/search-slots")}>
                Back to Search Slots
            </button>

        </div>
    );
}

export default BookSlot;

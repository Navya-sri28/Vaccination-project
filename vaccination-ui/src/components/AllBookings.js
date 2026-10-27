import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function AllBookings() {

    const { userId } = useParams();

    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        if (userId) {
            fetchBookings();
        }

    }, [userId]);

    const fetchBookings = async () => {

        try {

            const response = await axios.get(
                `http://localhost:5000/api/bookings/user/${userId}`
            );

            console.log("Bookings Response:", response.data);

            if (response.data.success === true) {

                setBookings(response.data.data);

            } else {

                setBookings([]);
                setError(response.data.message || "No bookings found");

            }

        } catch (error) {

            console.log("Error fetching bookings:", error);

            setError("Unable to fetch bookings");

        } finally {

            setLoading(false);

        }
    };

    if (loading) {

        return (
            <div>
                <h1>All Bookings</h1>
                <p>Loading bookings...</p>
            </div>
        );

    }

    return (
        <div>

            <h1>All Bookings</h1>

            <br />

            <h2>
                Total Bookings: {bookings.length}
            </h2>

            <br />

            {error && (
                <p>{error}</p>
            )}

            {bookings.length === 0 && !error && (
                <p>No bookings found.</p>
            )}

            {bookings.map((booking) => (

                <div key={booking.id}>

                    <hr />

                    <h2>
                        Booking ID: {booking.id}
                    </h2>

                    <h3>User Details</h3>

                    <p>
                        <strong>User ID:</strong> {booking.user_id}
                    </p>

                    <p>
                        <strong>Name:</strong> {booking.user_name}
                    </p>

                    <p>
                        <strong>Email:</strong> {booking.email}
                    </p>

                    <p>
                        <strong>Phone:</strong> {booking.phone}
                    </p>

                    <br />

                    <h3>Vaccination Centre Details</h3>

                    <p>
                        <strong>Centre Name:</strong> {booking.centre_name}
                    </p>

                    <p>
                        <strong>Address:</strong> {booking.address}
                    </p>

                    <p>
                        <strong>City:</strong> {booking.city}
                    </p>

                    <p>
                        <strong>State:</strong> {booking.state}
                    </p>

                    <p>
                        <strong>Pin Code:</strong> {booking.pin_code}
                    </p>

                    <p>
                        <strong>Vaccine:</strong> {booking.vaccine_name}
                    </p>

                    <br />

                    <h3>Booking Details</h3>

                    <p>
                        <strong>Date:</strong> {booking.booking_date}
                    </p>

                    <p>
                        <strong>Time:</strong> {booking.booking_time}
                    </p>

                    <p>
                        <strong>Status:</strong> {booking.status}
                    </p>

                    <br />

                </div>

            ))}

            <hr />

            <br />

            <Link to="/user-dashboard">
                Back to User Dashboard
            </Link>

        </div>
    );
}

export default AllBookings;

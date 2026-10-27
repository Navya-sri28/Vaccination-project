import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SearchSlots() {

    const [centres, setCentres] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        fetchCentres();

    }, []);


    const fetchCentres = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/api/admin/centers"
            );

            console.log(response.data);

            if (response.data.success === true) {

                setCentres(response.data.data);

            }

        } catch (error) {

            console.log("Error fetching centres:", error);

        }
    };


    // Search centres
    const filteredCentres = centres.filter((centre) => {

        const searchText = search.toLowerCase();

        return (
            centre.name?.toLowerCase().includes(searchText) ||
            centre.city?.toLowerCase().includes(searchText) ||
            centre.state?.toLowerCase().includes(searchText) ||
            centre.vaccine_name?.toLowerCase().includes(searchText) ||
            centre.pin_code?.toString().includes(searchText)
        );

    });


    return (
        <div>

            <h1>Search Vaccination Slots</h1>

            <br />

            <input
                type="text"
                placeholder="Search by centre, city, state, vaccine or pin code"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <br />
            <br />

            {search !== "" && filteredCentres.length === 0 && (
                <p>No vaccination centres found.</p>
            )}


            {filteredCentres.map((centre) => (

                <div key={centre.id}>

                    <hr />

                    <h2>{centre.name}</h2>

                    <p>
                        <strong>Address:</strong> {centre.address}
                    </p>

                    <p>
                        <strong>City:</strong> {centre.city}
                    </p>

                    <p>
                        <strong>State:</strong> {centre.state}
                    </p>

                    <p>
                        <strong>Pin Code:</strong> {centre.pin_code}
                    </p>

                    <p>
                        <strong>Vaccine:</strong> {centre.vaccine_name}
                    </p>

                    <p>
                        <strong>Available Slots:</strong>{" "}
                        {centre.available_slots}
                    </p>

                    <p>
                        <strong>Status:</strong> {centre.status}
                    </p>

                    {centre.available_slots > 0 && (
                        <Link to={`/book-slot/${centre.id}`}>
                            Book Slot
                        </Link>
                    )}

                    <br />

                </div>

            ))}

        </div>
    );
}

export default SearchSlots;

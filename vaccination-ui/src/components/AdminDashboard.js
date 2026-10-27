import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {

  const [centres, setCentres] = useState([]);

  const navigate = useNavigate();


  // ============================
  // LOGOUT
  // ============================
  const handleLogout = () => {

    navigate("/");

  };


  // ============================
  // GET ALL VACCINATION CENTRES
  // ============================
  const fetchCentres = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/admin/centers"
      );

      console.log(response.data);

      if (response.data.success === true) {

        setCentres(response.data.data);

      } else {

        alert(
          response.data.message || "Unable to fetch vaccination centres"
        );

      }

    } catch (error) {

      console.log(error);

      alert("Unable to fetch vaccination centres");

    }
  };


  // ============================
  // DELETE VACCINATION CENTRE
  // ============================
  const deleteCentre = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this vaccination centre?"
    );

    if (!confirmDelete) {
      return;
    }

    try {

      const response = await axios.delete(
        `http://localhost:5000/api/admin/centers/${id}`
      );

      console.log(response.data);

      if (response.data.success === true) {

        alert(response.data.message);

        // Refresh vaccination centres
        fetchCentres();

      } else {

        alert(
          response.data.message || "Unable to delete vaccination centre"
        );

      }

    } catch (error) {

      console.log(error);

      alert("Unable to delete vaccination centre");

    }
  };


  // ============================
  // LOAD CENTRES
  // ============================
  useEffect(() => {

    fetchCentres();

  }, []);


  return (
    <div>

      {/* ============================
          TOP SECTION
          ============================ */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >

        <h1>ADMIN DASHBOARD</h1>

        <a
          href="#"
          onClick={(event) => {

            event.preventDefault();

            handleLogout();

          }}
        >
          Logout
        </a>

      </div>


      <hr />


      {/* ============================
          ADMIN LINKS
          ============================ */}

      <Link to="/create-vaccination-centre">
        Create Vaccination Centre
      </Link>

      <br />
      <br />

      <Link to="/show-all-users">
        Show All Users
      </Link>

      <br />
      <br />


      {/* ============================
          VACCINATION CENTRES
          ============================ */}

      <h2>Vaccination Centres</h2>


      {centres.length === 0 ? (

        <p>No vaccination centres available.</p>

      ) : (

        <table border="1">

          <thead>

            <tr>

              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Pin Code</th>
              <th>Contact Number</th>
              <th>Vaccine Name</th>
              <th>Available Slots</th>
              <th>Status</th>
              <th>Actions</th>

            </tr>

          </thead>


          <tbody>

            {centres.map((centre) => (

              <tr key={centre.id}>

                <td>{centre.id}</td>

                <td>{centre.name}</td>

                <td>{centre.address}</td>

                <td>{centre.city}</td>

                <td>{centre.state}</td>

                <td>{centre.pin_code}</td>

                <td>{centre.contact_number}</td>

                <td>{centre.vaccine_name}</td>

                <td>{centre.available_slots}</td>

                <td>{centre.status}</td>

                <td>

                  <Link
                    to={`/edit-vaccination-centre/${centre.id}`}
                  >
                    Edit
                  </Link>

                  {" | "}

                  <button
                    onClick={() => deleteCentre(centre.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>
  );
}

export default AdminDashboard;

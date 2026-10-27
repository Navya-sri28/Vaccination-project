import { Link } from "react-router-dom"; 
 
function UserDashboard() { 
 
    const userId = localStorage.getItem("userId"); 
 
    return ( 
        <div> 
 
            <h1>User Dashboard</h1> 
 
            <br /> 
 
            {/* Profile */} 
            <Link to={`/user-profile/${userId}`}> 
                Profile 
            </Link> 
 
            <br /> 
            <br /> 
 
            {/* Search Slots */} 
            <Link to="/search-slots"> 
                Search Slots 
            </Link> 
 
            <br /> 
            <br /> 
 
            {/* Book Slot */} 
            <Link to="/book-slot"> 
                Book Slot 
            </Link> 
 
            <br /> 
            <br /> 
 
            {/* All Bookings */} 
            <Link to={`/all-bookings/${userId}`}> 
                All Bookings 
            </Link> 
 
        </div> 
    ); 
} 
 
export default UserDashboard;

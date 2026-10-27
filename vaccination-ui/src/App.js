import { BrowserRouter, Routes, Route } from "react-router-dom"; 
 
import Home from "./components/Home"; 
 
import AdminLogin from "./components/AdminLogin"; 
import AdminDashboard from "./components/AdminDashboard"; 
import CreateVaccinationCentre from "./components/CreateVaccinationCentre"; 
import EditVaccinationCentre from "./components/EditVaccinationCentre"; 
import AdminLoginError from "./components/AdminLoginError"; 
 
import UserRegistration from "./components/UserRegistration"; 
import UserLogin from "./components/UserLogin"; 
import ShowAllUsers from "./components/ShowAllUsers"; 
import UserDashboard from "./components/UserDashboard"; 
import UserProfile from "./components/UserProfile"; 
 
// Added for Search Slots and Book Slot 
import SearchSlots from "./components/SearchSlots"; 
import BookSlot from "./components/BookSlot"; 

// Added for All Bookings
import AllBookings from "./components/AllBookings";
 
 
function App() { 
 
  return ( 
 
    <BrowserRouter> 
 
      <Routes> 
 
        {/* Home */} 
 
        <Route 
          path="/" 
          element={<Home />} 
        /> 
 
 
        {/* Admin */} 
 
        <Route 
          path="/admin-login" 
          element={<AdminLogin />} 
        /> 
 
        <Route 
          path="/admin-dashboard" 
          element={<AdminDashboard />} 
        /> 
 
        <Route 
          path="/admin-login-error" 
          element={<AdminLoginError />} 
        /> 
 
        <Route 
          path="/create-vaccination-centre" 
          element={<CreateVaccinationCentre />} 
        /> 
 
        <Route 
          path="/edit-vaccination-centre/:id" 
          element={<EditVaccinationCentre />} 
        /> 
 
        <Route 
          path="/show-all-users" 
          element={<ShowAllUsers />} 
        /> 
 
 
        {/* User */} 
 
        <Route 
          path="/user-registration" 
          element={<UserRegistration />} 
        /> 
 
        <Route 
          path="/user-login" 
          element={<UserLogin />} 
        /> 
 
 
        {/* User Dashboard */} 
 
        <Route 
          path="/user-dashboard" 
          element={<UserDashboard />} 
        /> 
 
 
        {/* User Profile */} 
 
        <Route 
          path="/user-profile/:id" 
          element={<UserProfile />} 
        /> 
 
 
        {/* Search Slots */} 
 
        <Route 
          path="/search-slots" 
          element={<SearchSlots />} 
        /> 
 
 
        {/* Book Slot */} 
 
        <Route 
          path="/book-slot" 
          element={<BookSlot />} 
        /> 
 
        <Route 
          path="/book-slot/:id" 
          element={<BookSlot />} 
        /> 

 
        {/* All Bookings */} 
 
        <Route 
          path="/all-bookings/:userId" 
          element={<AllBookings />} 
        /> 
 
 
      </Routes> 
 
    </BrowserRouter> 
 
  ); 
} 
 
export default App;
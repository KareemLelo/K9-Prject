import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HospitalNavBar } from "./components/HospitalNavBar";
import { Dashboard as VetDashboard } from "./pages/vetPanel/Dashboard";
import { NewCase } from "./pages/vetPanel/NewCase";
import { Profile } from "./pages/vetPanel/Profile";
import { Confirmation } from "./pages/vetPanel/Confirmation";
import AddCase from "./components/AddCase";
import { Login } from "./pages/Login";
import { Pets } from "./pages/hospital/Pets";
import { Vets } from "./pages/hospital/Vets";
import { Dashboard as HospitalDashboard } from "./pages/hospital/Dashboard";
import { Notifications } from "./pages/hospital/Notifications";
import { Analytics } from "./pages/hospital/Analytics";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/" element={<Login />} />

        {/* Vet Panel Routes */}
        <Route
          path="/vet/*"
          element={
            <div className="min-h-screen bg-gray-50">
              <NavBar />
              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Routes>
                  <Route path="dashboard" element={<VetDashboard />} />
                  <Route path="new-case" element={<NewCase />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="confirmation" element={<Confirmation />} />
                  <Route path="add-case" element={<AddCase />} />
                  <Route
                    path=""
                    element={<Navigate to="dashboard" replace />}
                  />
                </Routes>
              </main>
            </div>
          }
        />

        {/* Hospital Panel Routes */}
        <Route
          path="/hospital/*"
          element={
            <div className="min-h-screen bg-gray-50">
              <HospitalNavBar />
              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Routes>
                  <Route path="dashboard" element={<HospitalDashboard />} />
                  <Route path="pets" element={<Pets />} />
                  <Route path="vets" element={<Vets />} />
                  <Route path="analytics" element={<Analytics />} />
                  <Route path="notifications" element={<Notifications />} />
                  <Route
                    path=""
                    element={<Navigate to="dashboard" replace />}
                  />
                </Routes>
              </main>
            </div>
          }
        />

        {/* Catch all redirect to login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Doctors from './pages/Doctors';
import DoctorProfile from './pages/DoctorProfile';
import DepartmentDetails from './pages/DepartmentDetails';
import Facilities from './pages/Facilities';
import RoomTypes from './pages/RoomTypes';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor-profile" element={<DoctorProfile />} />
          <Route path="/department-details" element={<DepartmentDetails />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/room-types" element={<RoomTypes />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/home';
// import Doctors from './pages/doctors';
// import Login from './pages/login';
// import About from './pages/about';
// import Contact from './pages/contact';
// import MyProfile from './pages/myprofile'
// import MyAppointment from './pages/myappointment';

// import Appointment from './pages/appointment';
// import Navbar from './components/Navbar';

// const App = () => {
//   return (
//     <div >
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/doctors" element={<Doctors />} />
//         <Route path="/doctors/:Speciality" element={<Doctors />} />
//         <Route path="/login" element={<Login />} />  
//         <Route path="/myappointment" element={<MyAppointment />} />  
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/myprofile" element={<MyProfile />} />
        
//         <Route path="/appointment/:docid" element={< Appointment/>} />
        
//       </Routes>
//     </div>
//   );
// };

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Doctors from "./pages/doctors";
import Login from "./pages/login";
import About from "./pages/about";
import Contact from "./pages/contact";
import MyProfile from "./pages/myprofile";
import MyAppointment from "./pages/myappointment";
import Appointment from "./pages/appointment";
import Navbar from "./components/Navbar"
import AppContextProvider from "./context/AppContext";
import Footer from "./components/Footer";
// import AllDoctor from "./components/AllDoctor"; // Adjust path if needed
// 

const App = () => {
  return (
    <AppContextProvider> {/* Wrap the entire app in the provider */}
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:Speciality" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myappointment" element={<MyAppointment />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/appointment/:docid" element={<Appointment />} />
          

        </Routes>
        <Footer/>
      </div>
    </AppContextProvider>
  );
};

export default App;


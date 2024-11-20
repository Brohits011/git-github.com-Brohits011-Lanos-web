// import './App.css';
// import Navbar from './components/pages/LandingPage/Navbar.js';
// import Herosection from './components/pages/LandingPage/Herosection.js';
// import CourseCard from './components/pages/LandingPage/CourseCard.js';
// import PercentageSec from './components/pages/LandingPage/percentageSec.js';
// import Growsection from './components/pages/LandingPage/Growsection.js';
// import ContactUs from './components/pages/LandingPage/ContactUs.js';
// import Footer from './components/pages/LandingPage/Footer.js';
// import AdminLogin from './components/pages/LandingPage/AdminLogin.js';
// import StudentAdminPanel from './components/pages/LandingPage/StudentAdminPanel.js';
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import necessary components from react-router-dom
// import Signup from './components/Auth/Signup';
// import Login from './components/Auth/Login';
// import StudentList from './components/Dashboard/StudentList';
// import Documentation from './components/pages/Documentation/Documentation.js';

// import Java from '../src/assets/java-development.jpg';
// import Mern from '../src/assets/MERN-stack-development.jpg';
// import Python from '../src/assets/Python-development.jpg';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

//   useEffect(() => {
//     // Sync login state when token changes
//     const handleStorageChange = () => {
//       setIsLoggedIn(!!localStorage.getItem('token'));
//     };

//     window.addEventListener('storage', handleStorageChange);

//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   const handleLogin = () => setIsLoggedIn(true);
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//   };

//   // Define styles for the app container and the logout button
//   const appContainerStyle = {
//     padding: '20px',
//     textAlign: 'center',
//   };

//   const logoutButtonStyle = {
//     padding: '10px 20px',
//     fontSize: '16px',
//     backgroundColor: '#f44336', // red
//     color: 'white',
//     border: 'none',
//     cursor: 'pointer',
//     borderRadius: '5px',
//     marginBottom: '20px',
//   };

//   return (
//     <Router> {/* Only one Router component wrapping the whole app */}
//       <div className="App">
    


//         {/* All other components outside of routes */}
//         <Navbar />
//         <Herosection />
//         <div className="course-container">
//           <CourseCard
//             image={Java}
//             title="Full Stack Java Development 2024"
//             instructor="Mr. Vinod Ahirwar"
//             price="₹5500"
//             discount="40% off"
//             rating={4}
//           />
//           <CourseCard
//             image={Mern}
//             title="Full Stack Mern Development 2024"
//             instructor="Mr. Yogesh Tiwari"
//             price="₹3000"
//             discount="40% off"
//             rating={4}
//           />
//           <CourseCard
//             image={Python}
//             title="Full Stack Python Development 2024"
//             instructor="Ms. Lilawati Shekhawat"
//             price="₹6000"
//             discount="40% off"
//             rating={4}
//           />
//         </div>
//         <PercentageSec />
//         <Growsection />
//         <ContactUs />
//         <Footer />
//         <StudentAdminPanel />

//         {/* Define routes for courses and documentation inside main routing block */}
//         <main>
//         <Routes>
//           <Route path="/courses" element={<Documentation/>} />
//         </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import './App.css';
// import Navbar from './components/pages/LandingPage/Navbar.js';
// import Herosection from './components/pages/LandingPage/Herosection.js';
// import CourseCard from './components/pages/LandingPage/CourseCard.js';
// import PercentageSec from './components/pages/LandingPage/percentageSec.js';
// import Growsection from './components/pages/LandingPage/Growsection.js';
// import ContactUs from './components/pages/LandingPage/ContactUs.js';
// import Footer from './components/pages/LandingPage/Footer.js';
// import AdminLogin from './components/pages/LandingPage/AdminLogin.js';
// import StudentAdminPanel from './components/pages/LandingPage/StudentAdminPanel.js';
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import necessary components from react-router-dom
// import Signup from './components/Auth/Signup';
// import Login from './components/Auth/Login';
// import StudentList from './components/Dashboard/StudentList';
// import Documentation from './components/pages/Documentation/Documentation.js';

// import Java from '../src/assets/java-development.jpg';
// import Mern from '../src/assets/MERN-stack-development.jpg';
// import Python from '../src/assets/Python-development.jpg';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

//   useEffect(() => {
//     // Sync login state when token changes
//     const handleStorageChange = () => {
//       setIsLoggedIn(!!localStorage.getItem('token'));
//     };

//     window.addEventListener('storage', handleStorageChange);

//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   const handleLogin = () => setIsLoggedIn(true);
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//   };

//   // Define styles for the app container and the logout button
//   const appContainerStyle = {
//     padding: '20px',
//     textAlign: 'center',
//   };

//   const logoutButtonStyle = {
//     padding: '10px 20px',
//     fontSize: '16px',
//     backgroundColor: '#f44336', // red
//     color: 'white',
//     border: 'none',
//     cursor: 'pointer',
//     borderRadius: '5px',
//     marginBottom: '20px',
//   };

//   return (
//     <Router> {/* Only one Router component wrapping the whole app */}
//       <div className="App">
//         {/* Navbar should be outside the Routes so it shows on all pages */}
//         <Navbar />
        
//         {/* All other components outside of routes */}
//         <Herosection />
//         <div className="course-container">
//           <CourseCard
//             image={Java}
//             title="Full Stack Java Development 2024"
//             instructor="Mr. Vinod Ahirwar"
//             price="₹5500"
//             discount="40% off"
//             rating={4}
//           />
//           <CourseCard
//             image={Mern}
//             title="Full Stack Mern Development 2024"
//             instructor="Mr. Yogesh Tiwari"
//             price="₹3000"
//             discount="40% off"
//             rating={4}
//           />
//           <CourseCard
//             image={Python}
//             title="Full Stack Python Development 2024"
//             instructor="Ms. Lilawati Shekhawat"
//             price="₹6000"
//             discount="40% off"
//             rating={4}
//           />
//         </div>
//         <PercentageSec />
//         <Growsection />
//         <ContactUs />
//         <Footer />
//         <StudentAdminPanel />

//         {/* Define routes for courses and documentation inside main routing block */}
//         <Routes>
//           <Route path="/courses" element={<Documentation />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import './App.css';
import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Documentation from './components/pages/Documentation/Documentation.js';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route
          path="/"
          element={<LandingPage/>}
        />
        
        {/* Documentation Route */}
        <Route path="/courses" element={<Documentation />} />
      </Routes>
    </Router>
  );
};

export default App;


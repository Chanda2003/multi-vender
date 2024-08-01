

// // src/App.js
// import React from 'react';
// import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import VendorDashboard from './Components/pages/VendorDashboard';
// import AdminDashboard from './Components/pages/AdminDashboard';
// import Home from './Components/pages/Home';
// import './App.css';
// import Login from './Components/pages/login';
// import Register from './Components/pages/register';
// import { Button, Col, Row } from 'react-bootstrap';

// const App = () => {
//   const [isLogin, setIsLogin] = React.useState(true);
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Header />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/vendor-dashboard" element={<VendorDashboard />} />
//             <Route path="/admin-dashboard" element={<AdminDashboard />} />
//             <Row className="justify-content-md-center">
//         <Col md="6">
//           {isLogin ? <Login /> : <Register />}
//           <Button 
//             variant="link" 
//             onClick={() => setIsLogin(!isLogin)}
//           >
//             {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
//           </Button>
//         </Col>
//       </Row>
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import VendorDashboard from './Components/pages/VendorDashboard';
import AdminDashboard from './Components/pages/AdminDashboard';
import Home from './Components/pages/Home';
import './App.css';
import Login from './Components/pages/login';
import Register from './Components/pages/register';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vendor-dashboard" element={<VendorDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/vendors/:id' element={<VendorDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

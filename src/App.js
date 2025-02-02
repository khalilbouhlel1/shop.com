import React from "react";
import { Routes, Route ,Navigate} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/Hero/hero";
import Latestcollection from "./components/Latestcollection/latestcollection";
import Footer from "./components/footer/footer";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import Login from "./pages/login&registration/login";
import SingleProduct from "./pages/singleproduct/singleproduct";
import About from "./pages/about/about";
import AdminDashboard from "./pages/admin/Dashboard";
// Protected Route Component
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  if (!token) {
    return <Navigate to="/adminlogin" />;
  }
  
  if (user.id !== 'admin') {
    return <Navigate to="/" />;
  }
  
  return children;
};

const App = () => {
  return (
    <div className='App'>
      <Routes>
        {/* Admin Routes */}
        <Route path="/adminlogin" element={<Login />} />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        {/* Public Routes */}
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Latestcollection />
            <Footer />
          </>
        } />
        <Route path="/shop" element={
          <>
            <Navbar />
            <Shop />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        } />
        <Route path="/cart" element={
          <>
            <Navbar />
            <Cart />
            <Footer />
          </>
        } />
        <Route path="/product/:id" element={
          <>
            <Navbar />
            <SingleProduct />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
};

export default App;

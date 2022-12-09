import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Logout from "./components/logout/logout";
import Product from "./components/product/product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="pages">
        <Routes>
          <Route
            path="/"
            element={
              <div className="page">
                <Home />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div className="page">
                <Login />
              </div>
            }
          />
          <Route
            path="/logout"
            element={
              <div className="page">
                <Logout />
              </div>
            }
          />
          <Route
            path="/register"
            element={
              <div className="page">
                <Register />
              </div>
            }
          />
          <Route
            path="/producto/:name"
            element={
              <div className="page">
                <Product />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

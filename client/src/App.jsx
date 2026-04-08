import React, { Suspense, lazy } from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./components/home/home"));
const Login = lazy(() => import("./components/login/login"));
const Register = lazy(() => import("./components/register/register"));
const Logout = lazy(() => import("./components/logout/logout"));
const Product = lazy(() => import("./components/product/product"));

function App() {
  return (
    <div className="App">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="pages">
        <Suspense fallback={<div className="page"></div>}>
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
        </Suspense>
      </div>
    </div>
  );
}

export default App;

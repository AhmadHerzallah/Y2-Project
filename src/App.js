import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// pages
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Saved from "./Pages/Saved";
import ContactUs from "./Pages/ContactUs";

// components
import NavBar from "./Components/NavBar";
import SubmissionForm from "./Components/SubmissionForm";
import University from "./Pages/University";
function App() {
  const [auth, setAuth] = useState(() => {
    let localValue = window.localStorage.getItem("auth");
    if (localValue) {
      return JSON.parse(localValue);
    }
    return false;
  });
  return (
    <div>
      <Router>
        <NavBar auth={auth} setAuth={setAuth} />
        <Routes>
          <Route
            path="/"
            element={auth ? <Home /> : <Login setAuth={setAuth} />}
          />
          <Route path="/saved" element={<Saved />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/submissionform" element={<SubmissionForm />} />
          <Route path="/university/:name" element={<University />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

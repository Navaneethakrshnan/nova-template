import { useState } from "react";
import "./App.css";
import MainMenu from "./components/MainMenu";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";
import EventLanding from "./components/EventLanding";
import Event from "./components/Event";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/registration_page" element={<RegistrationPage />} />
          <Route path="/eventregistration" element={<EventLanding />} />
          <Route path="/events" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

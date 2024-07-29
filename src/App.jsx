import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventLanding from "./components/EventLanding";
import RegistrationPage from "./components/RegistrationPage";
import Events from "./components/Events";
import UpcomingEvents from "./components/UpcomingEvents";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/events" element={<UpcomingEvents />} />
          <Route path="/events_landing" element={<EventLanding />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
      <Home />
    </>
  );
}

export default App;

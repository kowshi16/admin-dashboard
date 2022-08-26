import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import Reservation from "./components/Reservation/Reservation";
import Clients from "./components/Clients/Clients";
import Admin from "./components/Admin/Admin";
import Events from "./components/Events/Events";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/client" element={<Clients />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/events" element={<Events />}></Route>
      </Routes>
    </>
  );
}

export default App;

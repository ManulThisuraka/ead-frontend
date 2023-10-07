import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./screens/Login.js";
import Register from "./screens/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

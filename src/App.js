import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";

import { AlternateLayout } from "./layouts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/home"  element={<HomePage />} />
      <Route path="/login" element={<LoginPage Layout={AlternateLayout} />} />
    </Routes>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MyClassrooms from "./pages/MyClassrooms";
import StudentHub from "./pages/StudentHub";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MyClassrooms />} />
          <Route path="/classroom/:classroomId" element={<StudentHub />} />
        </Routes>
      </div>
    </Router>
  );
}

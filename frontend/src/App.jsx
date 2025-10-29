import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MyClassrooms from "./pages/MyClassrooms";
import StudentHub from "./pages/StudentHub";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/classrooms" element={
            <>
              <Sidebar />
              <MyClassrooms />
            </>
          } />
          <Route path="/classroom/:classroomId" element={
            <>
              <Sidebar />
              <StudentHub />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

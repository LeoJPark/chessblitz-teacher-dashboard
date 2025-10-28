import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaUsers, FaWifi } from "react-icons/fa";

export default function StudentHub() {
  const { classroomId } = useParams();
  const navigate = useNavigate();

  // Mock classroom data - in a real app, you'd fetch this based on classroomId
  const classroom = {
    id: classroomId,
    name: "Example Classroom",
    students: 20,
    filled: 19,
    description: "Welcome to Example Classroom"
  };

  return (
    <div className="student-hub-container">
      {/* Header */}
      <div className="student-hub-header">
        <button onClick={() => navigate("/")} className="back-button">
          <FaArrowLeft />
          <span>Back</span>
        </button>
        <div className="header-info">
          <h1 className="hub-title">{classroom.name}</h1>
          <div className="hub-stats">
            <div className="stat-item">
              <FaWifi />
              <span>{classroom.filled}/{classroom.students} students</span>
            </div>
            <div className="stat-item">
              <FaUsers />
              <span>Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="student-hub-content">
        <div className="hub-card">
          <h2>Classroom Information</h2>
          <p>{classroom.description}</p>
        </div>

        <div className="hub-card">
          <h2>Students</h2>
          <p>View and manage students in this classroom.</p>
        </div>

        <div className="hub-card">
          <h2>Assignments</h2>
          <p>Create and manage assignments for your students.</p>
        </div>
      </div>
    </div>
  );
}


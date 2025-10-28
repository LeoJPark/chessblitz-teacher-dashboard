import ClassroomGrid from "../components/ClassroomGrid";
import EditPanel from "../components/EditPanel";

export default function MyClassrooms() {
  return (
    <div className="main-content">
      <h1 className="page-title">My Classrooms</h1>
      
      <div className="content-wrapper">
        <div style={{ flex: 1 }}>
          <ClassroomGrid />
        </div>
        <div style={{ flexShrink: 0 }}>
          <EditPanel />
        </div>
      </div>
    </div>
  );
}

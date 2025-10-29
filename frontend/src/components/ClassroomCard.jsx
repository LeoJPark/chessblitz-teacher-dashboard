import { useNavigate } from "react-router-dom";
import { FaWifi, FaUsers, FaEllipsisV } from "react-icons/fa";
import logoTransparent from "../assets/logo_transparent.png";

export default function ClassroomCard({ classroom }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/classroom/${classroom.id}`);
  };

  return (
    <div className="classroom-card" onClick={handleClick}>
      {/* Header with logo background */}
      <div 
        className="card-header logo-background"
        style={{ backgroundImage: `url(${logoTransparent})`, backgroundPosition: 'center left' }}
      >
        {/* Menu dots */}
        <div className="card-menu">
          <FaEllipsisV />
        </div>
      </div>

      {/* Card body */}
      <div className="card-body">
        <h3 className="card-title">{classroom.name}</h3>
        <p className="card-subtitle">{classroom.filled === 1 ? '1 student' : '0 students'}</p>
        
        {/* Footer with WiFi and student count */}
        <div className="card-footer">
          <FaWifi />
          <span>{classroom.filled}/{classroom.students}</span>
          <FaUsers />
        </div>
      </div>
    </div>
  );
}

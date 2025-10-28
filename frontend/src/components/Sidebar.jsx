import logoImage from "../assets/logo.png";
import profileIcon from "../assets/profile-icon.png";
import classroomsIcon from "../assets/classrooms-icon.png";
import createIcon from "../assets/create-icon.png";
import settingsIcon from "../assets/settings-icon.png";
import logoutIcon from "../assets/logout-icon.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-box">
          <img src={logoImage} alt="Logo" className="logo-image" />
        </div>
      </div>

      {/* Navigation Items */}
      <div className="sidebar-nav">
        {/* Profile */}
        <div className="nav-item">
          <div className="nav-icon">
            <img src={profileIcon} alt="Profile" />
          </div>
          <span className="nav-text">Profile</span>
        </div>

        {/* My Classrooms - Active */}
        <div className="nav-item active">
          <div className="nav-icon">
            <img src={classroomsIcon} alt="My Classrooms" />
          </div>
          <span className="nav-text">My Classrooms</span>
        </div>

        {/* Create Classrooms */}
        <div className="nav-item">
          <div className="nav-icon">
            <img src={createIcon} alt="Create Classrooms" />
          </div>
          <span className="nav-text">Create Classrooms</span>
        </div>

        {/* Settings */}
        <div className="nav-item">
          <div className="nav-icon">
            <img src={settingsIcon} alt="Settings" />
          </div>
          <span className="nav-text">Settings</span>
        </div>
      </div>

      {/* Log Out */}
      <div className="sidebar-footer">
        <div className="nav-item">
          <div className="nav-icon">
            <img src={logoutIcon} alt="Log Out" />
          </div>
          <span className="nav-text">Log Out</span>
        </div>
      </div>
    </div>
  );
}

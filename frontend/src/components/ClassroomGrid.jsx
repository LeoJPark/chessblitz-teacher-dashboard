import { useEffect, useState } from "react";
import ClassroomCard from "./ClassroomCard";
import { getClassrooms } from "../api/classroomApi";

export default function ClassroomGrid() {
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    getClassrooms().then(setClassrooms);
  }, []);

  return (
    <div className="classroom-grid">
      {classrooms.map((cls) => (
        <ClassroomCard key={cls.id} classroom={cls} />
      ))}
    </div>
  );
}

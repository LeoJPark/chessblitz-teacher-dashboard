// Mock API for classrooms
const mockClassrooms = [
  {
    id: 1,
    name: "Example Classroom",
    students: 20,
    filled: 1,
    background: "#4A90E2"
  },
  {
    id: 2,
    name: "Example Classroom",
    students: 20,
    filled: 0,
    background: "#7B68EE"
  },
  {
    id: 3,
    name: "Example Classroom",
    students: 20,
    filled: 0,
    background: "#E74C3C"
  },
  {
    id: 4,
    name: "Example Classroom",
    students: 20,
    filled: 0,
    background: "#3498DB"
  },
  {
    id: 5,
    name: "Example Classroom",
    students: 20,
    filled: 0,
    background: "#9B59B6"
  }
];

export function getClassrooms() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockClassrooms), 100);
  });
}

export function getClassroomById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockClassrooms.find(c => c.id === id));
    }, 100);
  });
}

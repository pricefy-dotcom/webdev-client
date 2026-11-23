import { v4 as uuidv4 } from "uuid";

// 5.4.7 Assignments (on your own) — same pattern as Modules
export default function AssignmentsDao(db: any) {
  const findAssignmentsForCourse = (courseId: string) =>
    db.assignments.filter((a: any) => a.course === courseId);

  const findAssignmentById = (assignmentId: string) =>
    db.assignments.find((a: any) => a._id === assignmentId);

  const createAssignment = (assignment: any) => {
    const newAssignment = { ...assignment, _id: uuidv4() };
    db.assignments = [...db.assignments, newAssignment];
    return newAssignment;
  };

  const updateAssignment = (assignmentId: string, updates: any) => {
    const assignment = findAssignmentById(assignmentId);
    if (!assignment) return null;
    Object.assign(assignment, updates, { _id: assignmentId });
    return assignment;
  };

  const deleteAssignment = (assignmentId: string) => {
    db.assignments = db.assignments.filter((a: any) => a._id !== assignmentId);
  };

  return {
    findAssignmentsForCourse,
    findAssignmentById,
    createAssignment,
    updateAssignment,
    deleteAssignment,
  };
}

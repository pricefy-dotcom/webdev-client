import type { Express, Request, Response } from "express";
import AssignmentsDao from "./dao";

export default function AssignmentRoutes(app: Express, db: any) {
  const dao = AssignmentsDao(db);

  const findAssignmentsForCourse = (req: Request, res: Response) => {
    const { courseId } = req.params as Record<string, string>;
    res.json(dao.findAssignmentsForCourse(courseId));
  };

  const findAssignmentById = (req: Request, res: Response) => {
    const { assignmentId } = req.params as Record<string, string>;
    const assignment = dao.findAssignmentById(assignmentId);
    if (!assignment) {
      res.status(404).json({ message: `Assignment ${assignmentId} not found` });
      return;
    }
    res.json(assignment);
  };

  const createAssignmentForCourse = (req: Request, res: Response) => {
    const { courseId } = req.params as Record<string, string>;
    const newAssignment = dao.createAssignment({ ...req.body, course: courseId });
    res.json(newAssignment);
  };

  const updateAssignment = (req: Request, res: Response) => {
    const { assignmentId } = req.params as Record<string, string>;
    const updated = dao.updateAssignment(assignmentId, req.body);
    if (!updated) {
      res.status(404).json({ message: `Unable to update assignment ${assignmentId}` });
      return;
    }
    res.json(updated);
  };

  const deleteAssignment = (req: Request, res: Response) => {
    const { assignmentId } = req.params as Record<string, string>;
    dao.deleteAssignment(assignmentId);
    res.sendStatus(200);
  };

  app.get("/api/courses/:courseId/assignments", findAssignmentsForCourse);
  app.post("/api/courses/:courseId/assignments", createAssignmentForCourse);
  app.get("/api/assignments/:assignmentId", findAssignmentById);
  app.put("/api/assignments/:assignmentId", updateAssignment);
  app.delete("/api/assignments/:assignmentId", deleteAssignment);
}

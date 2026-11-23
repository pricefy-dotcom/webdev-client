import type { Express, Request, Response } from "express";
import CoursesDao from "./dao";
import EnrollmentsDao from "../Enrollments/dao";

export default function CourseRoutes(app: Express, db: any) {
  const dao = CoursesDao(db);
  const enrollmentsDao = EnrollmentsDao(db);

  const findAllCourses = (req: Request, res: Response) => {
    res.json(dao.findAllCourses());
  };

  const findCoursesForEnrolledUser = (req: Request, res: Response) => {
    let { userId } = req.params as Record<string, string>;
    if (userId === "current") {
      const currentUser = req.session.currentUser;
      if (!currentUser) {
        res.sendStatus(401);
        return;
      }
      userId = currentUser._id;
    }
    res.json(dao.findCoursesForEnrolledUser(userId));
  };

  // Creates the course AND enrolls the signed-in user in it
  const createCourse = (req: Request, res: Response) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    const newCourse = dao.createCourse(req.body);
    enrollmentsDao.enrollUserInCourse(currentUser._id, newCourse._id);
    res.json(newCourse);
  };

  const updateCourse = (req: Request, res: Response) => {
    const { courseId } = req.params as Record<string, string>;
    const updated = dao.updateCourse(courseId, req.body);
    if (!updated) {
      res.status(404).json({ message: `Unable to update course ${courseId}` });
      return;
    }
    res.json(updated);
  };

  const deleteCourse = (req: Request, res: Response) => {
    const { courseId } = req.params as Record<string, string>;
    dao.deleteCourse(courseId);
    res.sendStatus(200);
  };

  app.get("/api/courses", findAllCourses);
  app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);
  app.post("/api/users/current/courses", createCourse);
  app.put("/api/courses/:courseId", updateCourse);
  app.delete("/api/courses/:courseId", deleteCourse);
}
